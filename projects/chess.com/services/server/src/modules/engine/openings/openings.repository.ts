import { Opening, Prisma, PrismaClient } from '@prisma/client';
import { getPrismaClient } from '../../../common/prisma';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OpeningsRepository {
  private prismaClient: PrismaClient;

  constructor() {
    this.prismaClient = getPrismaClient();
  }

  public async getOpenings({
    eco = '',
    name = '',
    firstMove = '',
  }: {
    eco: string;
    name: string;
    firstMove: string;
  }): Promise<{ total: number; openings: Opening[] }> {
    let where: Prisma.OpeningWhereInput = {};
    if (eco !== '') {
      where = { ...where, eco };
    }
    if (firstMove !== '') {
      where = { ...where, firstMove };
    }
    if (name !== '') {
      where = { ...where, name: { contains: name, mode: 'insensitive' } };
    }
    const [total = 0, openings = []] = await this.prismaClient.$transaction([
      this.prismaClient.opening.count({ where }),
      this.prismaClient.opening.findMany({
        where,
        orderBy: [
          { centipawn: 'asc' },
          { eco: 'asc' },
          { name: 'asc' },
          { firstMove: 'asc' },
        ],
      }),
    ]);
    return { total, openings };
  }

  public async getECOs(): Promise<{ total: number; ecos: string[] }> {
    const results = await this.prismaClient.opening.findMany({
      select: { eco: true },
      distinct: ['eco'],
    });
    const total = results.length;
    const ecos = results.map(({ eco }) => eco);
    return { total, ecos };
  }

  public async getOpening(eco = '', name = ''): Promise<Opening> {
    const where: Prisma.OpeningWhereInput | undefined =
      eco !== '' && name !== '' ? { eco, name } : undefined;
    const opening: Opening = await this.prismaClient.opening.findFirstOrThrow({
      where,
    });
    return opening;
  }
}
