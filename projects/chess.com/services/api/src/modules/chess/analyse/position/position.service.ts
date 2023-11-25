import { Position, Prisma, PrismaClient } from '@prisma/client';
import { LichessClient } from '../../../../common/clients/lichess.org';
import { getPrismaClient } from '../../../../common/prisma';

export class PositionService {
  private lichessClient: LichessClient;
  private prismaClient: PrismaClient;

  constructor() {
    this.lichessClient = new LichessClient();
    this.prismaClient = getPrismaClient();
  }

  public async getPosition(fen: string): Promise<Position> {
    const where: Prisma.PositionWhereInput = { fen };
    const position: Position | null = await this.prismaClient.position
      .findFirst({ where });
    if (position === null) { return this.syncPosition(fen); }
    return position;
  }

  public async syncPosition(fen: string): Promise<Position> {
    const cloudEvaluation = await this.lichessClient.getCloudEvaluation(
      fen,
      1
    );
    const { principalVariationSearch = [] } = cloudEvaluation;
    const firstPrincipalVariationSearch = principalVariationSearch[0] ?? {
      nextMoves: '',
      centipawn: 0,
      pawn: 0
    };
    const {
      nextMoves = '',
      centipawn = 0,
      pawn = 0
    } = firstPrincipalVariationSearch;
    const where: Prisma.PositionWhereUniqueInput = { fen };
    const data = { fen, nextMoves, centipawn, pawn };
    return this.prismaClient.position.upsert({
      create: data,
      update: data,
      where
    });
  }
}
