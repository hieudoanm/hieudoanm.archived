import { Prisma, PrismaClient } from '@prisma/client';
import { logger } from '../../../../../../common/libs/log';
import { getPrismaClient } from '../../../../../../common/prisma';
import {
  DRAW_RESULTS,
  LOSS_RESULTS,
  WIN_RESULTS
} from '../../insights.constants';
import { Opponent } from './opponents.types';

export class OpponentsService {
  private prismaClient: PrismaClient;

  constructor() {
    this.prismaClient = getPrismaClient();
  }

  private buildOpponentsQuery(username: string): Prisma.Sql {
    const winList: string = WIN_RESULTS.map(
      (result: string) => `'${result}'`
    ).join(',');
    const drawList: string = DRAW_RESULTS.map(
      (result: string) => `'${result}'`
    ).join(',');
    const lossList: string = LOSS_RESULTS.map(
      (result: string) => `'${result}'`
    ).join(',');
    const selectOpponentClause =
      `(CASE WHEN g."whiteUsername" = '${username}' THEN g."blackUsername" ELSE g."whiteUsername" END) as "opponent"`;
    const selectCountGamesClause = 'COUNT(*) as "games"';
    const selectCountWinClause =
      `COUNT(1) FILTER (WHERE (CASE WHEN g."whiteUsername" = '${username}' THEN g."whiteResult" ELSE g."blackResult" END) in (${winList})) as "win"`;
    const selectCountDrawClause =
      `COUNT(1) FILTER (WHERE (CASE WHEN g."whiteUsername" = '${username}' THEN g."whiteResult" ELSE g."blackResult" END) in (${drawList})) as "draw"`;
    const selectCountLossClause =
      `COUNT(1) FILTER (WHERE (CASE WHEN g."whiteUsername" = '${username}' THEN g."whiteResult" ELSE g."blackResult" END) in (${lossList})) as "loss"`;
    const selectClause =
      `SELECT ${selectOpponentClause}, ${selectCountGamesClause}, ${selectCountWinClause}, ${selectCountDrawClause}, ${selectCountLossClause}`;
    const fromClause = 'FROM "Game" as g';
    const whereClause =
      `WHERE (g."whiteUsername" = '${username}' OR g."blackUsername" = '${username}') AND g."rules" = 'chess' AND g."rated" = true`;
    const groupByClause = 'GROUP BY "opponent"';
    const orderByClause = 'ORDER BY "games" DESC';
    const limitClause = 'LIMIT 100';
    const query =
      `${selectClause} ${fromClause} ${whereClause} ${groupByClause} ${orderByClause} ${limitClause};`;
    logger.info(`buildOpponentsQuery query=${query}`);
    const sql: Prisma.Sql = Prisma.raw(query);
    return sql;
  }

  public async getOpponents(username: string): Promise<Opponent[]> {
    const opponentsQuery = this.buildOpponentsQuery(username);
    return this.prismaClient.$queryRaw<Opponent[]>(opponentsQuery);
  }
}
