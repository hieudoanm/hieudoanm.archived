import { Prisma, PrismaClient } from '@prisma/client';
import { getPrismaClient } from '../../../../../common/prisma';
import { DRAW_RESULTS, LOSS_RESULTS } from '../../insights.constants';
import { DaysOfWeekService } from './helper/days-of-week.service';
import { TimeOfDaysService } from './helper/time-of-days.service';
import { Result, Results } from './results.types';

export class ResultsService {
  private prismaClient: PrismaClient;
  private timeOfDaysService: TimeOfDaysService;
  private daysOfWeekService: DaysOfWeekService;

  constructor() {
    this.prismaClient = getPrismaClient();
    this.timeOfDaysService = new TimeOfDaysService();
    this.daysOfWeekService = new DaysOfWeekService();
  }

  private buildWinResultsQuery(username: string): Prisma.Sql {
    const selectClause = `SELECT (CASE WHEN g."whiteUsername" = '${username}' THEN g."blackResult" ELSE g."whiteResult" END) as "result", COUNT(CASE WHEN g."whiteUsername" = '${username}' THEN g."blackResult" ELSE g."whiteResult" END) as "count"`;
    const whereClause = `WHERE TEXT(CASE WHEN g."whiteUsername" = '${username}' THEN g."whiteResult" ELSE g."blackResult" END) = 'win' AND g."rules" = 'chess' AND g."rated" = true`;
    const groupByClause = `GROUP BY CASE WHEN g."whiteUsername" = '${username}' THEN g."blackResult" ELSE g."whiteResult" END`;
    const orderByClause = `ORDER BY "count" DESC`;
    const query = `${selectClause} FROM public."Game" as g ${whereClause} ${groupByClause} ${orderByClause};`;
    const sql: Prisma.Sql = Prisma.raw(query);
    return sql;
  }

  private buildDrawResultsQuery(username: string): Prisma.Sql {
    const drawList: string = DRAW_RESULTS.map(
      (result: string) => `'${result}'`
    ).join(',');
    const selectClause = `SELECT (CASE WHEN g."whiteUsername" = '${username}' THEN g."whiteResult" ELSE g."blackResult" END) as "result", COUNT(CASE WHEN g."whiteUsername" = '${username}' THEN g."whiteResult" ELSE g."blackResult" END) as "count"`;
    const whereClause = `WHERE TEXT(CASE WHEN g."whiteUsername" = '${username}' THEN g."whiteResult" ELSE g."blackResult" END) in (${drawList}) AND g."rules" = 'chess' AND g."rated" = true`;
    const groupByClause = `GROUP BY CASE WHEN g."whiteUsername" = '${username}' THEN g."whiteResult" ELSE g."blackResult" END`;
    const orderByClause = `ORDER BY "count" DESC`;
    const query = `${selectClause} FROM public."Game" as g ${whereClause} ${groupByClause} ${orderByClause};`;
    const sql: Prisma.Sql = Prisma.raw(query);
    return sql;
  }

  private buildLossResultsQuery(username: string): Prisma.Sql {
    const lossList: string = LOSS_RESULTS.map(
      (result: string) => `'${result}'`
    ).join(',');
    const selectClause = `SELECT (CASE WHEN g."whiteUsername" = '${username}' THEN g."whiteResult" ELSE g."blackResult" END) as "result", COUNT(CASE WHEN g."whiteUsername" = '${username}' THEN g."whiteResult" ELSE g."blackResult" END) as "count"`;
    const whereClause = `WHERE TEXT(CASE WHEN g."whiteUsername" = '${username}' THEN g."whiteResult" ELSE g."blackResult" END) in (${lossList}) AND g."rules" = 'chess' AND g."rated" = true`;
    const groupByClause = `GROUP BY CASE WHEN g."whiteUsername" = '${username}' THEN g."whiteResult" ELSE g."blackResult" END`;
    const orderByClause = `ORDER BY "count" DESC`;
    const query = `${selectClause} FROM public."Game" as g ${whereClause} ${groupByClause} ${orderByClause};`;
    const sql: Prisma.Sql = Prisma.raw(query);
    return sql;
  }

  public async getResults(username: string): Promise<Results> {
    const winQuery = this.buildWinResultsQuery(username);
    const drawQuery = this.buildDrawResultsQuery(username);
    const lossQuery = this.buildLossResultsQuery(username);
    const [win = [], draw = [], loss = []] =
      await this.prismaClient.$transaction([
        this.prismaClient.$queryRaw<Result[]>(winQuery),
        this.prismaClient.$queryRaw<Result[]>(drawQuery),
        this.prismaClient.$queryRaw<Result[]>(lossQuery),
      ]);
    const timeOfDays =
      await this.timeOfDaysService.getResultsByTimeOfDays(username);
    const daysOfWeek =
      await this.daysOfWeekService.getResultsByDaysOfWeek(username);
    return { win, draw, loss, timeOfDays, daysOfWeek };
  }
}
