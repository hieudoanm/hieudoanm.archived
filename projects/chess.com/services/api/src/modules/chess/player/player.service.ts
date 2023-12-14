import {
  League,
  Player,
  Prisma,
  PrismaClient,
  Status,
  Title,
} from '@prisma/client';
import axios from 'axios';
import { ChessClient } from '../../../common/clients/chess.com';
import {
  ChessPlayer,
  ChessStats,
} from '../../../common/clients/chess.com/types';
import { getPrismaClient } from '../../../common/prisma';

export class PlayerService {
  private chessClient: ChessClient;
  private prismaClient: PrismaClient;

  constructor() {
    this.chessClient = new ChessClient();
    this.prismaClient = getPrismaClient();
  }

  public async getPlayer(username: string): Promise<Player> {
    const where: Prisma.PlayerWhereInput = { username };
    const player = await this.prismaClient.player.findFirst({ where });
    if (player !== null) {
      return player;
    }
    return this.syncPlayer(username);
  }

  private mapStats(stats: ChessStats) {
    const {
      chess_daily: {
        last: {
          rating: statsDailyRatingLast = 0,
          rd: statsDailyRatingDeviation = 0,
        } = { rating: 0, rd: 0 },
        best: { rating: statsDailyRatingBest = 0 } = { rating: 0 },
        record: {
          win: statsDailyRecordWin = 0,
          draw: statsDailyRecordDraw = 0,
          loss: statsDailyRecordLoss = 0,
        } = {
          record: { win: 0, draw: 0, loss: 0 },
        },
      } = {
        last: { rating: 0, rd: 0 },
        best: { rating: 0 },
        record: { win: 0, draw: 0, loss: 0 },
      },
      chess_rapid: {
        last: {
          rating: statsRapidRatingLast = 0,
          rd: statsRapidRatingDeviation = 0,
        } = { rating: 0, rd: 0 },
        best: { rating: statsRapidRatingBest = 0 } = { rating: 0 },
        record: {
          win: statsRapidRecordWin = 0,
          draw: statsRapidRecordDraw = 0,
          loss: statsRapidRecordLoss = 0,
        } = {
          record: { win: 0, draw: 0, loss: 0 },
        },
      } = {
        last: { rating: 0, rd: 0 },
        best: { rating: 0 },
        record: { win: 0, draw: 0, loss: 0 },
      },
      chess_blitz: {
        last: {
          rating: statsBlitzRatingLast = 0,
          rd: statsBlitzRatingDeviation = 0,
        } = { rating: 0, rd: 0 },
        best: { rating: statsBlitzRatingBest = 0 } = { rating: 0 },
        record: {
          win: statsBlitzRecordWin = 0,
          draw: statsBlitzRecordDraw = 0,
          loss: statsBlitzRecordLoss = 0,
        } = {
          record: { win: 0, draw: 0, loss: 0 },
        },
      } = {
        last: { rating: 0, rd: 0 },
        best: { rating: 0 },
        record: { win: 0, draw: 0, loss: 0 },
      },
      chess_bullet: {
        last: {
          rating: statsBulletRatingLast = 0,
          rd: statsBulletRatingDeviation = 0,
        } = { rating: 0, rd: 0 },
        best: { rating: statsBulletRatingBest = 0 } = { rating: 0 },
        record: {
          win: statsBulletRecordWin = 0,
          draw: statsBulletRecordDraw = 0,
          loss: statsBulletRecordLoss = 0,
        } = {
          record: { win: 0, draw: 0, loss: 0 },
        },
      } = {
        last: { rating: 0, rd: 0 },
        best: { rating: 0 },
        record: { win: 0, draw: 0, loss: 0 },
      },
    } = stats;
    return {
      // Daily
      statsDailyRatingBest,
      statsDailyRatingLast,
      statsDailyRatingDeviation,
      statsDailyRecordWin,
      statsDailyRecordDraw,
      statsDailyRecordLoss,
      // Rapid
      statsRapidRatingBest,
      statsRapidRatingLast,
      statsRapidRatingDeviation,
      statsRapidRecordWin,
      statsRapidRecordDraw,
      statsRapidRecordLoss,
      // Blitz
      statsBlitzRatingBest,
      statsBlitzRatingLast,
      statsBlitzRatingDeviation,
      statsBlitzRecordWin,
      statsBlitzRecordDraw,
      statsBlitzRecordLoss,
      // Bullt
      statsBulletRatingBest,
      statsBulletRatingLast,
      statsBulletRatingDeviation,
      statsBulletRecordWin,
      statsBulletRecordDraw,
      statsBulletRecordLoss,
    };
  }

  private async mapPlayer(
    chessPlayer: ChessPlayer,
    stats: ChessStats,
    archives: string[]
  ): Promise<Player> {
    const {
      avatar = '',
      username = '',
      player_id: playerId = 0,
      name = '',
      title = '',
      followers = 0,
      country: countryUrl = '',
      location = '',
      last_online: lastOnline = 0,
      joined = 0,
      status = '',
      is_streamer: isStreamer = false,
      twitch_url: twitchUrl = '',
      verified = false,
      league = '',
    } = chessPlayer;
    const {
      data: { name: country = '', code: countryCode = '' },
    } = await axios.get<{
      name: string;
      code: string;
    }>(countryUrl);
    const chessStats = this.mapStats(stats);
    const d = new Date();
    const lastOnlineDate: Date = new Date(lastOnline * 1000);
    const joinedDate: Date = new Date(joined * 1000);
    return {
      ...chessStats,
      id: playerId,
      avatar,
      name,
      username,
      followers,
      location,
      country,
      countryCode,
      lastOnline: lastOnlineDate,
      joined: joinedDate,
      isStreamer,
      verified,
      twitchUrl,
      status: status as Status,
      // eslint-disable-next-line unicorn/no-null
      title: title ? (title as Title) : null,
      // eslint-disable-next-line unicorn/no-null
      league: league ? (league as League) : null,
      archives: archives.map((archive) =>
        archive.split('/').slice(-2).join('/')
      ),
      createdAt: d,
      updatedAt: d,
    };
  }

  public async syncPlayer(username: string): Promise<Player> {
    const chessPlayer: ChessPlayer =
      await this.chessClient.getChessPlayer(username);
    const stats: ChessStats = await this.chessClient.getChessStats(username);
    const archives: string[] =
      await this.chessClient.getChessArchives(username);
    archives.sort((a, b) => (a < b ? 1 : -1));
    const player: Player = await this.mapPlayer(chessPlayer, stats, archives);
    const upsertArguments = {
      create: player,
      update: player,
      where: { username },
    };
    return this.prismaClient.player.upsert(upsertArguments);
  }
}
