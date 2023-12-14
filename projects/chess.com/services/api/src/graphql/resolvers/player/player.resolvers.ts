import { Game, Player } from '@prisma/client';
import { ChessContext } from '../../../apollo';
import { GamesSynced } from '../../data-source/types';

export const resolvers = {
  Query: {
    player: (
      _parent: unknown,
      { username }: { username: string },
      { chessDataSource }: ChessContext
    ): Promise<Player> => {
      return chessDataSource.getPlayer(username);
    },
  },
  Mutation: {
    player: (
      _parent: unknown,
      { username }: { username: string },
      { chessDataSource }: ChessContext
    ): Promise<Player> => {
      return chessDataSource.syncPlayer(username);
    },
    games: (
      _parent: unknown,
      {
        username,
        month = new Date().getMonth() + 1,
        year = new Date().getFullYear(),
      }: { username: string; year: number; month: number },
      { chessDataSource }: ChessContext
    ): Promise<GamesSynced> => {
      return chessDataSource.syncGames(username, { year, month });
    },
  },
  Player: {
    games: async (
      { username }: { username: string },
      _arguments: unknown,
      { chessDataSource }: ChessContext
    ): Promise<Game[]> => {
      const { games = [] } = await chessDataSource.getGames(username);
      return games;
    },
  },
};
