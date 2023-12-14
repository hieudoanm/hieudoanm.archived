import { Prisma, PrismaClient } from '@prisma/client';
import { logger } from '../../../../../../common/libs/log';
import { getPrismaClient } from '../../../../../../common/prisma';
import {
  DAYS_OF_WEEK,
  DRAW_RESULTS,
  LOSS_RESULTS,
  RULE,
  TIME_OF_DAYS,
  WIN_RESULTS,
} from '../../insights.constants';
import {
  Games,
  GamesByDayOfWeek,
  GamesByPeriod,
  GamesByTimeOfDay,
} from './games.types';

export class GamesService {
  private prismaClient: PrismaClient;

  constructor() {
    this.prismaClient = getPrismaClient();
  }

  private buildGameResultsWhereInput(username: string, results: string[]) {
    return {
      OR: [
        { whiteUsername: username, whiteResult: { in: results } },
        { blackUsername: username, blackResult: { in: results } },
      ],
    };
  }

  private buildGameWhereInput(
    options: Prisma.GameWhereInput
  ): Prisma.GameWhereInput {
    return { ...options, rated: true, rules: RULE };
  }

  private async getNumberOfGames(username: string) {
    const totalWhere: Prisma.GameWhereInput = this.buildGameWhereInput({
      OR: [{ whiteUsername: username }, { blackUsername: username }],
    });
    const winWhere: Prisma.GameWhereInput = this.buildGameWhereInput(
      this.buildGameResultsWhereInput(username, WIN_RESULTS)
    );
    const drawWhere: Prisma.GameWhereInput = this.buildGameWhereInput(
      this.buildGameResultsWhereInput(username, DRAW_RESULTS)
    );
    const lossWhere: Prisma.GameWhereInput = this.buildGameWhereInput(
      this.buildGameResultsWhereInput(username, LOSS_RESULTS)
    );
    const [total = 0, win = 0, draw = 0, loss = 0] =
      await this.prismaClient.$transaction([
        this.prismaClient.game.count({ where: totalWhere }),
        this.prismaClient.game.count({ where: winWhere }),
        this.prismaClient.game.count({ where: drawWhere }),
        this.prismaClient.game.count({ where: lossWhere }),
      ]);
    return { total, win, draw, loss };
  }

  private buildGamesByPeriodsQuery(username: string): Prisma.Sql {
    const selectClause =
      'SELECT COUNT(*) as "games", extract(year from g."endTime")::int as "period"';
    const groupByClause = 'GROUP BY extract(year from g."endTime")';
    const whereClause = `WHERE (g."whiteUsername"='${username}' OR g."blackUsername"='${username}') AND g."rules" = '${RULE}' AND g."rated" = true`;
    const query = `${selectClause} FROM public."Game" as g ${whereClause} ${groupByClause}`;
    logger.info(`buildGamesByPeriodsQuery query=${query}`);
    const sql: Prisma.Sql = Prisma.raw(query);
    return sql;
  }

  private buildGamesByTimeOfDaysQuery(username: string): Prisma.Sql {
    const selectClause =
      'SELECT COUNT(*) as "games", floor(extract(hour from g."endTime") / 6.0)::int as "timeOfDayIndex"';
    const groupByClause = 'GROUP BY "timeOfDayIndex"';
    const whereClause = `WHERE (g."whiteUsername"='${username}' OR g."blackUsername"='${username}') AND g."rules" = '${RULE}' AND g."rated" = true`;
    const query = `${selectClause} FROM public."Game" as g ${whereClause} ${groupByClause}`;
    logger.info(`buildGamesByTimeOfDaysQuery query=${query}`);
    const sql: Prisma.Sql = Prisma.raw(query);
    return sql;
  }

  private buildGamesByDaysOfWeek(username: string): Prisma.Sql {
    const selectClause =
      'SELECT COUNT(*) as "games", extract(dow from g."endTime") as "dayOfWeekIndex"';
    const groupByClause = 'GROUP BY "dayOfWeekIndex"';
    const whereClause = `WHERE (g."whiteUsername"='${username}' OR g."blackUsername"='${username}') AND g."rules" = '${RULE}' AND g."rated" = true`;
    const query = `${selectClause} FROM public."Game" as g ${whereClause} ${groupByClause}`;
    logger.info(`buildGamesByDaysOfWeek query=${query}`);
    const sql: Prisma.Sql = Prisma.raw(query);
    return sql;
  }

  private async getGamesByCalender(username: string): Promise<{
    periods: GamesByPeriod[];
    timeOfDays: GamesByTimeOfDay[];
    daysOfWeek: GamesByDayOfWeek[];
  }> {
    const gamesByPeriodsQuery: Prisma.Sql =
      this.buildGamesByPeriodsQuery(username);
    const gamesByTimeOfDaysQuery: Prisma.Sql =
      this.buildGamesByTimeOfDaysQuery(username);
    const gamesByDaysOfWeekQuery: Prisma.Sql =
      this.buildGamesByDaysOfWeek(username);
    const [periods = [], timeOfDaysList = [], daysOfWeekList = []] =
      await this.prismaClient.$transaction([
        this.prismaClient.$queryRaw<GamesByPeriod[]>(gamesByPeriodsQuery),
        this.prismaClient.$queryRaw<
          { games: number; timeOfDayIndex: number }[]
        >(gamesByTimeOfDaysQuery),
        this.prismaClient.$queryRaw<
          { games: number; dayOfWeekIndex: number }[]
        >(gamesByDaysOfWeekQuery),
      ]);
    const timeOfDays: GamesByTimeOfDay[] = timeOfDaysList.map(
      ({ games = 0, timeOfDayIndex = 0 }) => ({
        games,
        timeOfDay: TIME_OF_DAYS[`${timeOfDayIndex}`],
      })
    );
    const daysOfWeek: GamesByDayOfWeek[] = daysOfWeekList.map(
      ({ games = 0, dayOfWeekIndex = 0 }) => ({
        games,
        dayOfWeek: DAYS_OF_WEEK[`${dayOfWeekIndex}`],
      })
    );
    return { periods, timeOfDays, daysOfWeek };
  }

  public async getGames(username: string): Promise<Games> {
    const {
      total = 0,
      win = 0,
      draw = 0,
      loss = 0,
    } = await this.getNumberOfGames(username);
    const {
      periods = [],
      timeOfDays = [],
      daysOfWeek = [],
    } = await this.getGamesByCalender(username);
    return { total, win, draw, loss, periods, timeOfDays, daysOfWeek };
  }
}
