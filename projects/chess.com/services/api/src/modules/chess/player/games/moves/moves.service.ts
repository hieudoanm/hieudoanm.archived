import { Move, Piece, Prisma, PrismaClient, Side } from '@prisma/client';
import { Chess } from 'chess.js';
import { logger } from '../../../../../common/libs/log';
import { getPrismaClient } from '../../../../../common/prisma';
import { chunk } from '../../../../../common/utils/chunk';
import { FILE_LIST, PIECE_MAP } from '../games.constants';
import { GamesService } from '../games.service';
import { File, PieceSymbol } from '../games.types';

export class MovesService {
  private chess: Chess;
  private prismaClient: PrismaClient;
  private gamesService: GamesService;

  constructor() {
    this.chess = new Chess();
    this.prismaClient = getPrismaClient();
    this.gamesService = new GamesService();
  }

  public async getGameMoves(username: string, gameId: string): Promise<Move[]> {
    logger.info(`getGameMoves username=${username} gameId=${gameId}`);
    const where: Prisma.MoveWhereInput = { gameId };
    const total: number = await this.prismaClient.move.count({ where });
    if (total === 0) {
      await this.syncGameMoves(username, gameId);
    }
    const moves: Move[] = await this.prismaClient.move.findMany({ where });
    return moves;
  }

  private getPiece(annotation: string): Piece {
    const first: string = annotation[0] ?? '';
    if (['O-O', 'O-O-O'].includes(annotation)) {
      return 'king' as Piece;
    }
    if (FILE_LIST.includes(first as File)) {
      return 'pawn' as Piece;
    }
    const symbol: PieceSymbol = first as PieceSymbol;
    return PIECE_MAP[`${symbol}`];
  }

  private mapMovesFromPGN(
    movesArray: string[][]
  ): Omit<Move, 'gameId' | 'fen'>[] {
    return movesArray.map((array: string[]) => {
      const numberString: string = array[0] ?? '';
      const number: number = Number.parseInt(
        numberString.replaceAll('.', ''),
        10
      );
      const side: Side = numberString.includes('...') ? Side.black : Side.white;
      const annotation: string = array[1] ?? '';
      const piece: Piece = this.getPiece(annotation);
      const castling: boolean = ['O-O', 'O-O-O'].includes(annotation);
      const captured: boolean = annotation.includes('x');
      const check: boolean = annotation.includes('+');
      const checkmate: boolean = annotation.includes('#');
      const promote: boolean = annotation.includes('=');
      const promoteIndex: number = annotation.indexOf('=');
      const promoteToSymbol: PieceSymbol =
        promoteIndex > -1
          ? (annotation.slice(
              promoteIndex + 1,
              promoteIndex + 2
            ) as PieceSymbol)
          : ('' as PieceSymbol);
      const promoteTo: Piece | undefined = PIECE_MAP[`${promoteToSymbol}`];
      const d: Date = new Date();
      return {
        number,
        annotation,
        piece,
        side,
        captured,
        castling,
        promote,
        promoteTo,
        check,
        checkmate,
        createdAt: d,
        updatedAt: d,
      };
    });
  }

  private mapMovesWithFEN(
    moves: Omit<Move, 'gameId' | 'fen'>[],
    gameId: string
  ): Move[] {
    this.chess.reset();
    return moves.map((move: Omit<Move, 'gameId' | 'fen'>) => {
      this.chess.move(move.annotation);
      const fen: string = this.chess.fen();
      return { ...move, gameId, fen };
    });
  }

  private async getGameMovesFromDatabase(
    username: string,
    gameId: string
  ): Promise<Move[]> {
    const pgn = await this.gamesService.getGamePGN(username, gameId);
    const lines = pgn.split('\n').filter((line: string) => !!line);
    const movesString = lines[`${lines.length - 1}`];
    const movesArray: string[][] = chunk(movesString.split(' '), 4).filter(
      (array: string[]) => array.length === 4
    );
    const moves = this.mapMovesFromPGN(movesArray);
    return this.mapMovesWithFEN(moves, gameId);
  }

  public async syncGameMoves(username: string, gameId: string) {
    const moves: Move[] = await this.getGameMovesFromDatabase(username, gameId);
    const upsertTransactions = moves.map((move) => {
      const { number } = move;
      const data = { ...move, gameId };
      // eslint-disable-next-line camelcase
      const where = { gameId_number: { gameId, number } };
      const upsertArguments: Prisma.MoveUpsertArgs = {
        create: data,
        update: data,
        where,
      };
      return this.prismaClient.move.upsert(upsertArguments);
    });
    const responses = await this.prismaClient.$transaction(upsertTransactions);
    return { total: responses.length };
  }
}
