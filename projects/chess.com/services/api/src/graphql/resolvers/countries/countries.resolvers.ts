import { ChessContext } from '../../../apollo';
import { Country, CountryTotal } from '../../data-source/types';

export const resolvers = {
  Query: {
    countries: async (
      _parent: unknown,
      _arguments: unknown,
      { chessDataSource }: ChessContext
    ): Promise<CountryTotal[]> => {
      return chessDataSource.getCountries();
    },
    country: async (
      _parent: unknown,
      { code }: { code: string; },
      { chessDataSource }: ChessContext
    ): Promise<Country> => {
      return chessDataSource.getCountry(code);
    }
  }
};
