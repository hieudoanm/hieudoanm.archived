import { Prisma, PrismaClient, Title } from '@prisma/client';
import { getPrismaClient } from '../../../../common/prisma';
import { timeRangeInMilliseconds } from '../../chess.enum';
import { StreamersResponse } from './streamers.types';

export class StreamersRepository {
  private prismaClient: PrismaClient;

  constructor() {
    this.prismaClient = getPrismaClient();
  }

  public async getStreamers({
    title,
    country
  }: {
    title?: Title;
    country?: string;
  }): Promise<StreamersResponse> {
    const milliseconds: number = timeRangeInMilliseconds.YEAR;
    const d = new Date(Date.now() - milliseconds);
    const [date] = d.toISOString().split('T');
    const mainWhere: Prisma.PlayerWhereInput = {
      isStreamer: true,
      lastOnline: { gte: `${date}T00:00:00Z` }
    };
    let where = { ...mainWhere };
    if (title) { where = { ...where, title }; }
    if (country) { where = { ...where, countryCode: country }; }
    const [countries = [], total = 0, players = []] = await this.prismaClient
      .$transaction([
        this.prismaClient.player.findMany({
          where: { ...mainWhere, title },
          distinct: ['countryCode', 'country'],
          orderBy: { country: 'asc' },
          select: { countryCode: true, country: true }
        }),
        this.prismaClient.player.count({ where }),
        this.prismaClient.player.findMany({
          where,
          orderBy: [{ followers: 'desc' }]
        })
      ]);
    return {
      countries,
      total,
      players
    };
  }
}
