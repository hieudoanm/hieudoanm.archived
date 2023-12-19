import { Prisma, PrismaClient } from '@prisma/client';
import { getPrismaClient } from '../../../../../../common/prisma';
import {
  DRAW_RESULTS,
  LOSS_RESULTS,
  TIME_OF_DAYS,
} from '../../../insights.constants';
import { ResultsByTimeOfDay } from '../results.types';

export class TimeOfDaysService {
  private prismaClient: PrismaClient;

  constructor() {
    this.prismaClient = getPrismaClient();
  }

  private buildWinResultsByTimeOfDaysQuery(username: string) {
    const selectClause =
      'SELECT floor(extract(hour from g."endTime") / 6.0)::int as "timeOfDayIndex", COUNT(*) as "win"';
    const whereClause = `WHERE TEXT(CASE WHEN g."whiteUsername" = '${username}' THEN g."whiteResult" ELSE g."blackResult" END) = 'win' AND g."rules" = 'chess' AND g."rated" = true`;
    const query = `${selectClause} FROM public."Game" as g ${whereClause} GROUP BY "timeOfDayIndex";`;
    const sql: Prisma.Sql = Prisma.raw(query);
    return sql;
  }

  private buildDrawResultsByTimeOfDaysQuery(username: string): Prisma.Sql {
    const drawList: string = DRAW_RESULTS.map(
      (result: string) => `'${result}'`
    ).join(',');
    const selectClause =
      'SELECT floor(extract(hour from g."endTime") / 6.0)::int as "timeOfDayIndex", COUNT(*) as "draw"';
    const fromClause = 'FROM public."Game" as g';
    const whereClause = `WHERE TEXT(CASE WHEN g."whiteUsername" = '${username}' THEN g."whiteResult" ELSE g."blackResult" END) in (${drawList}) AND g."rules" = 'chess' AND g."rated" = true`;
    const groupByClause = 'GROUP BY "timeOfDayIndex"';
    const query = `${selectClause} ${fromClause} ${whereClause} ${groupByClause};`;
    const sql: Prisma.Sql = Prisma.raw(query);
    return sql;
  }

  private buildLossResultsByTimeOfDaysQuery(username: string): Prisma.Sql {
    const lossList: string = LOSS_RESULTS.map(
      (result: string) => `'${result}'`
    ).join(',');
    const selectClause =
      'SELECT floor(extract(hour from g."endTime") / 6.0)::int as "timeOfDayIndex", COUNT(*) as "loss"';
    const fromClause = 'FROM public."Game" as g';
    const whereClause = `WHERE TEXT(CASE WHEN g."whiteUsername" = '${username}' THEN g."whiteResult" ELSE g."blackResult" END) in (${lossList}) AND g."rules" = 'chess' AND g."rated" = true`;
    const groupByClause = 'GROUP BY "timeOfDayIndex"';
    const query = `${selectClause} ${fromClause} ${whereClause} ${groupByClause};`;
    const sql: Prisma.Sql = Prisma.raw(query);
    return sql;
  }

  public async getResultsByTimeOfDays(
    username: string
  ): Promise<ResultsByTimeOfDay[]> {
    const winQuery = this.buildWinResultsByTimeOfDaysQuery(username);
    const drawQuery = this.buildDrawResultsByTimeOfDaysQuery(username);
    const lossQuery = this.buildLossResultsByTimeOfDaysQuery(username);
    const [wins = [], draws = [], losses = []] =
      await this.prismaClient.$transaction([
        this.prismaClient.$queryRaw<{ win: number; timeOfDayIndex: number }[]>(
          winQuery
        ),
        this.prismaClient.$queryRaw<{ draw: number; timeOfDayIndex: number }[]>(
          drawQuery
        ),
        this.prismaClient.$queryRaw<{ loss: number; timeOfDayIndex: number }[]>(
          lossQuery
        ),
      ]);

    return wins.map(({ win, timeOfDayIndex: winTimeOfDayIndex }) => {
      const timeOfDay: string = TIME_OF_DAYS[`${winTimeOfDayIndex}`];
      const { draw = 0 } = draws.find(
        ({ timeOfDayIndex: drawTimeOfDayIndex }) =>
          drawTimeOfDayIndex === winTimeOfDayIndex
      ) ?? { draw: 0 };
      const { loss = 0 } = losses.find(
        ({ timeOfDayIndex: lossTimeOfDayIndex }) =>
          lossTimeOfDayIndex === winTimeOfDayIndex
      ) ?? { draw: 0 };
      return { timeOfDay, win, draw, loss };
    });
  }
}
