import { Player, Prisma, PrismaClient } from '@prisma/client';
import { ChessTitle } from '../../common/clients/chess.com/types';
import { logger } from '../../common/libs/log';
import { getPrismaClient } from '../../common/prisma';
import {
  TimeRange,
  timeRangeInDays,
  timeRangeInMilliseconds,
} from '../chess.enum';
import { TitledStatsDto } from './titled.dto';

export class TitledRepository {
  private prismaClient: PrismaClient;

  constructor() {
    this.prismaClient = getPrismaClient();
  }

  private async getTitledPlayers({
    title,
    timeRange = 'YEAR',
  }: {
    title: ChessTitle;
    timeRange: TimeRange;
  }): Promise<{ total: number; players: Player[] }> {
    const milliseconds: number = timeRangeInMilliseconds[`${timeRange}`];
    const d = new Date(Date.now() - milliseconds);
    const [date] = d.toISOString().split('T');
    const where = { title, lastOnline: { gte: `${date}T00:00:00Z` } };
    const [total = 0, players = []] = await this.prismaClient.$transaction([
      this.prismaClient.player.count({ where }),
      this.prismaClient.player.findMany({
        where,
        orderBy: [
          { statsBulletRatingLast: 'desc' },
          { statsBlitzRatingLast: 'desc' },
          { statsRapidRatingLast: 'desc' },
          { username: 'asc' },
        ],
      }),
    ]);
    return {
      total,
      players,
    };
  }

  private buildAverageRatingQuery({
    title,
    timeRange,
    timeControl,
  }: {
    title: string;
    timeRange: TimeRange;
    timeControl: string;
  }): Prisma.Sql {
    const days: number = timeRangeInDays[`${timeRange}`];
    const query: string = `SELECT AVG(p."stats${timeControl}RatingLast") as "average" FROM public."Player" as p WHERE p."title" = '${title}' AND p."lastOnline" > (CURRENT_DATE - INTERVAL '${days}' day) AND p."stats${timeControl}RatingLast" != 0;`;
    logger.info(`buildAverageRatingQuery query=${query}`);
    return Prisma.raw(query);
  }

  private buildMaxAverageRating({
    title,
    timeRange,
    timeControl,
  }: {
    title: string;
    timeRange: TimeRange;
    timeControl: string;
  }): Prisma.Sql {
    const days: number = timeRangeInDays[`${timeRange}`];
    const query: string = `SELECT MAX(p."stats${timeControl}RatingLast") as "max" FROM public."Player" as p WHERE p."title" = '${title}' AND p."lastOnline" > (CURRENT_DATE - INTERVAL '${days}' day) AND p."stats${timeControl}RatingLast" != 0;`;
    logger.info(`buildMaxAverageRating query=${query}`);
    return Prisma.raw(query);
  }

  public async getTitledStats({
    title,
    timeRange,
  }: {
    title: ChessTitle;
    timeRange: TimeRange;
  }): Promise<TitledStatsDto> {
    const averageRapidRatingQuery = this.buildAverageRatingQuery({
      title,
      timeRange,
      timeControl: 'Rapid',
    });
    const maxRapidRatingQuery = this.buildMaxAverageRating({
      title,
      timeRange,
      timeControl: 'Rapid',
    });
    const averageBlitzRatingQuery = this.buildAverageRatingQuery({
      title,
      timeRange,
      timeControl: 'Blitz',
    });
    const maxBlitzRatingQuery = this.buildMaxAverageRating({
      title,
      timeRange,
      timeControl: 'Blitz',
    });
    const averageBulletRatingQuery = this.buildAverageRatingQuery({
      title,
      timeRange,
      timeControl: 'Bullet',
    });
    const maxBulletRatingQuery = this.buildMaxAverageRating({
      title,
      timeRange,
      timeControl: 'Bullet',
    });
    const [
      [{ average: averageRapidRating = 0 }],
      [{ max: maxRapidRating = 0 }],
      [{ average: averageBlitzRating = 0 }],
      [{ max: maxBlitzRating = 0 }],
      [{ average: averageBulletRating = 0 }],
      [{ max: maxBulletRating = 0 }],
    ] = await this.prismaClient.$transaction([
      this.prismaClient.$queryRaw<{ average: number }[]>(
        averageRapidRatingQuery
      ),
      this.prismaClient.$queryRaw<{ max: number }[]>(maxRapidRatingQuery),
      this.prismaClient.$queryRaw<{ average: number }[]>(
        averageBlitzRatingQuery
      ),
      this.prismaClient.$queryRaw<{ max: number }[]>(maxBlitzRatingQuery),
      this.prismaClient.$queryRaw<{ average: number }[]>(
        averageBulletRatingQuery
      ),
      this.prismaClient.$queryRaw<{ max: number }[]>(maxBulletRatingQuery),
    ]);
    const { total = 0, players = [] } = await this.getTitledPlayers({
      title,
      timeRange,
    });
    return {
      averageRapidRating: Number.parseFloat(averageRapidRating.toFixed(2)),
      maxRapidRating,
      averageBlitzRating: Number.parseFloat(averageBlitzRating.toFixed(2)),
      maxBlitzRating,
      averageBulletRating: Number.parseFloat(averageBulletRating.toFixed(2)),
      maxBulletRating,
      total,
      players,
    };
  }
}
