import { Opening } from '@prisma/client';
import { ChessContext } from '../../../apollo';

export const resolvers = {
  Query: {
    openings: async (
      _parent: unknown,
      { eco = '', name = '' }: { eco: string; name: string },
      { chessDataSource }: ChessContext
    ): Promise<Opening[]> => {
      const { openings } = await chessDataSource.getOpenings({ eco, name });
      return openings;
    }
  }
};
