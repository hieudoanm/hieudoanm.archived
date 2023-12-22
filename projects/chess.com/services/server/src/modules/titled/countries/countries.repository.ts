import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import { getPrismaClient } from 'src/common/prisma';
import { CountriesResponseDto, CountryResponseDto } from './countries.dto';

@Injectable()
export class CountriesRepository {
  private prismaClient: PrismaClient;

  constructor() {
    this.prismaClient = getPrismaClient();
  }

  public async getCountries(): Promise<CountryResponseDto[]> {
    const query: string = `SELECT p."countryCode", p."country", COUNT(p."id") as total
FROM public."Player" as p
WHERE p."title" IS NOT NULL AND p."lastOnline" > (CURRENT_DATE - INTERVAL '1' year)
GROUP BY p."country", p."countryCode"
ORDER BY total DESC, p."country" ASC;`;
    const sql: Prisma.Sql = Prisma.raw(query);
    return this.prismaClient.$queryRaw<CountryResponseDto[]>(sql);
  }

  public async getTitledPlayersByCountry(
    countryCode: string
  ): Promise<CountriesResponseDto> {
    // eslint-disable-next-line unicorn/no-null
    const where = { countryCode, title: { not: null } };
    const [
      total = 0,
      players = [],
      {
        _avg: { statsRapidRatingLast: averageRapidRating = 0 },
      },
      {
        _avg: { statsBlitzRatingLast: averageBlitzRating = 0 },
      },
      {
        _avg: { statsBulletRatingLast: averageBulletRating = 0 },
      },
      {
        _max: { statsRapidRatingLast: maxRapidRating = 0 },
      },
      {
        _max: { statsBlitzRatingLast: maxBlitzRating = 0 },
      },
      {
        _max: { statsBulletRatingLast: maxBulletRating = 0 },
      },
      titles = [],
    ] = await this.prismaClient.$transaction([
      this.prismaClient.player.count({ where }),
      this.prismaClient.player.findMany({
        where,
        orderBy: [
          { statsBulletRatingLast: 'desc' },
          { statsBlitzRatingLast: 'desc' },
          { statsRapidRatingLast: 'desc' },
        ],
      }),
      this.prismaClient.player.aggregate({
        _avg: { statsRapidRatingLast: true },
        where: { ...where, statsRapidRatingLast: { gt: 0 } },
      }),
      this.prismaClient.player.aggregate({
        _avg: { statsBlitzRatingLast: true },
        where: { ...where, statsBlitzRatingLast: { gt: 0 } },
      }),
      this.prismaClient.player.aggregate({
        _avg: { statsBulletRatingLast: true },
        where: { ...where, statsBulletRatingLast: { gt: 0 } },
      }),
      this.prismaClient.player.aggregate({
        _max: { statsRapidRatingLast: true },
        where: { ...where, statsRapidRatingLast: { gt: 0 } },
      }),
      this.prismaClient.player.aggregate({
        _max: { statsBlitzRatingLast: true },
        where: { ...where, statsBlitzRatingLast: { gt: 0 } },
      }),
      this.prismaClient.player.aggregate({
        _max: { statsBulletRatingLast: true },
        where: { ...where, statsBulletRatingLast: { gt: 0 } },
      }),
      // this.prismaClient.player.groupBy({
      //   where,
      //   by: ['title'],
      //   _count: { title: true },
      //   orderBy: { _count: { title: 'desc' } },
      // }),
    ]);
    return {
      averageRapidRating: averageRapidRating ?? 0,
      averageBlitzRating: averageBlitzRating ?? 0,
      averageBulletRating: averageBulletRating ?? 0,
      maxRapidRating: maxRapidRating ?? 0,
      maxBlitzRating: maxBlitzRating ?? 0,
      maxBulletRating: maxBulletRating ?? 0,
      total,
      players,
      titles: titles.map(({ _count, title = '' }) => ({
        title: title ?? '',
        total: (_count?.valueOf() as Record<string, number>).title ?? 0,
      })),
    };
  }
}
