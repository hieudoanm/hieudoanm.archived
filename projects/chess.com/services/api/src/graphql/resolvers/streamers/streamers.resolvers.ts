import { Title } from '@prisma/client';
import { ChessContext } from '../../../apollo';
import { StreamersResponse } from '../../../modules/chess/player/steamers/streamers.types';

export const resolvers = {
  Query: {
    streamers: async (
      _parent: unknown,
      { title, country }: { title: Title; country: string; },
      { chessDataSource }: ChessContext
    ): Promise<StreamersResponse> => {
      const {
        total = 0,
        players = [],
        countries = []
      } = await chessDataSource.getStreamers({
        title,
        country
      });
      return { total, players, countries };
    }
  }
};
