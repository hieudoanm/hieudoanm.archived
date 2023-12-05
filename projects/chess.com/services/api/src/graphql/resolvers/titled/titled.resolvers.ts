import { ChessContext } from '../../../apollo';
import { TimeRange } from '../../../modules/chess/chess.enum';
import { Titled } from '../../data-source/types';

export const resolvers = {
  Query: {
    titled: (
      _parent: unknown,
      { title, timeRange = 'YEAR' }: { title: string; timeRange: TimeRange },
      { chessDataSource }: ChessContext
    ): Promise<Titled> => {
      return chessDataSource.getTitled({ title, timeRange });
    }
  }
};
