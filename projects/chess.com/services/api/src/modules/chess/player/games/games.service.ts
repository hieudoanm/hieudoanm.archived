import { Game, Prisma, PrismaClient } from '@prisma/client';
import { ChessClient } from '../../../../common/clients/chess.com';
import { ChessGame } from '../../../../common/clients/chess.com/types';
import { logger } from '../../../../common/libs/log';
import { getPrismaClient } from '../../../../common/prisma';
import { PositionService } from '../../analyse/position/position.service';

export class GamesService {
  private chessClient: ChessClient;
  private prismaClient: PrismaClient;
  private positionService: PositionService;

  constructor() {
    this.chessClient = new ChessClient();
    this.prismaClient = getPrismaClient();
    this.positionService = new PositionService();
  }

  public async getGames(
    username: string,
    {
      month = new Date().getMonth() + 1,
      year = new Date().getFullYear(),
    }: { month: number; year: number }
  ): Promise<{ total: number; games: Game[] }> {
    logger.info(`getGames month=${month} year=${year}`);
    const where: Prisma.GameWhereInput = {
      OR: [{ whiteUsername: username }, { blackUsername: username }],
      endTime: {
        gte: new Date(year, month - 1, 1),
        lt: new Date(year, month, 1),
      },
    };
    const [total = 0, games = []] = await this.prismaClient.$transaction([
      this.prismaClient.game.count({ where }),
      this.prismaClient.game.findMany({
        where,
        orderBy: { endTime: 'desc' },
      }),
    ]);
    return { total, games };
  }

  public async getGame(username: string, gameId: string): Promise<Game> {
    const where: Prisma.GameWhereInput = {
      OR: [{ whiteUsername: username }, { blackUsername: username }],
      id: gameId,
    };
    const game: Game = await this.prismaClient.game.findFirstOrThrow({
      where,
    });
    return game;
  }

  public async getGamePGN(username: string, gameId: string): Promise<string> {
    const game: Game = await this.getGame(username, gameId);
    return game.pgn || '';
  }

  private async upsertGames(games: Game[]): Promise<Game[]> {
    const upsertTransactions = games.map((game) => {
      const upsertArguments = {
        create: game,
        update: game,
        where: { id: game.id },
      };
      return this.prismaClient.game.upsert(upsertArguments);
    });
    return this.prismaClient.$transaction(upsertTransactions);
  }

  private mapGames(chessGames: ChessGame[]): Game[] {
    const games: Game[] = [];
    for (const chessGame of chessGames) {
      try {
        const {
          url = '',
          uuid: id = '',
          pgn = '',
          time_control: timeControl = '',
          end_time: endTime = 0,
          rated = false,
          tcn = '',
          initial_setup: initialSetup = '',
          fen = '',
          time_class: timeClass = '',
          rules = '',
          accuracies: { white: whiteAccuracy = 0, black: blackAccuracy = 0 } = {
            white: 0,
            black: 0,
          },
          white: {
            username: whiteUsername = '',
            result: whiteResult = '',
            rating: whiteRating = 0,
          } = {
            username: '',
            result: '',
            rating: 0,
          },
          black: {
            username: blackUsername = '',
            result: blackResult = '',
            rating: blackRating = 0,
          } = {
            username: '',
            result: '',
            rating: 0,
          },
        } = chessGame;
        const endDate: Date = new Date(endTime * 1000);
        const d: Date = new Date();
        const lowerWhiteUsername: string = whiteUsername.toLowerCase();
        const lowerBlackUsername: string = blackUsername.toLowerCase();
        const lowerWhiteResult: string = whiteResult.toLowerCase();
        const lowerBlackResult: string = blackResult.toLowerCase();
        games.push({
          url,
          id,
          pgn,
          timeControl,
          timeClass,
          endTime: endDate,
          rated,
          tcn,
          initialSetup,
          fen,
          rules,
          whiteId: '',
          blackId: '',
          whiteUsername: lowerWhiteUsername,
          blackUsername: lowerBlackUsername,
          whiteResult: lowerWhiteResult,
          blackResult: lowerBlackResult,
          whiteAccuracy,
          blackAccuracy,
          whiteRating,
          blackRating,
          createdAt: d,
          updatedAt: d,
        });
      } catch (error) {
        logger.error(`mapGames error=${error}`);
      }
    }
    return games;
  }

  private async syncGamesByYearAndMonth(
    username: string,
    year: number,
    month: number
  ): Promise<{
    total: number;
    synced: number;
    existed: number;
  }> {
    const chessGames: ChessGame[] =
      await this.chessClient.getChessGamesByYearAndMonth(username, year, month);
    const chessGameUuids: string[] = chessGames.map(({ uuid }) => uuid);
    const { games: databaseGames = [] } = await this.getGames(username, {
      year,
      month,
    });
    const databaseGameIds: Set<string> = new Set(
      databaseGames.map(({ id }) => id)
    );
    const newChessGameUuids: Set<string> = new Set(
      chessGameUuids.filter((uuid: string) => !databaseGameIds.has(uuid))
    );
    const newChessGames: ChessGame[] = chessGames.filter(
      ({ uuid }: ChessGame) => newChessGameUuids.has(uuid)
    );
    const newGames: Game[] = this.mapGames(newChessGames);
    const games: (Game | undefined)[] = await this.upsertGames(newGames);
    return {
      total: chessGames.length,
      existed: databaseGames.length,
      synced: games.length,
    };
  }

  public async syncGames(
    username: string,
    {
      month = new Date().getMonth() + 1,
      year = new Date().getFullYear(),
    }: { month: number; year: number }
  ): Promise<{ total: number; synced: number; existed: number }> {
    logger.info(`syncGames month=${month} year=${year}`);
    const {
      total = 0,
      synced = 0,
      existed = 0,
    } = await this.syncGamesByYearAndMonth(username, year, month);
    return { total, synced, existed };
  }
}
