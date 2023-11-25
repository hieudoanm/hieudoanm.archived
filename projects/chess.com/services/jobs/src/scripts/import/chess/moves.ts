import { Game, Player } from '@prisma/client';
import axios from 'axios';
import { logger } from '../../../common/log';

const BASE_URL = 'https://chessinsightsapi.vercel.app/api/chess';

const main = async () => {
  const usernames: string[] = ['hikaru'];

  for (const username of usernames) {
    try {
      const playerUrl = `${BASE_URL}/player/${username}`;
      logger.info('playerUrl', playerUrl);
      const { data: player } = await axios.get<Player>(playerUrl, {
        method: 'POST'
      });
      logger.info('player', player);
      const { archives = [] } = player;
      for (const archive of archives) {
        try {
          const [yyyy = '', mm = ''] = archive.split('/');
          const urlSearchParameters = new URLSearchParams();
          urlSearchParameters.set('year', yyyy);
          urlSearchParameters.set('month', mm);
          const gamesUrl =
            `${BASE_URL}/player/${username}/games?${urlSearchParameters.toString()}`;
          logger.info('gamesUrl', gamesUrl);
          const {
            data: { total = 0, games = [] }
          } = await axios.get<{
            total: number;
            games: Game[];
          }>(gamesUrl);
          logger.info('games total', total);
          for (const game of games) {
            const { id } = game;
            const movesUrl = `${BASE_URL}/player/${username}/games/${id}/moves`;
            logger.info('movesUrl', movesUrl);
            const {
              data: { total: totalMoves = 0 }
            } = await axios.get<{
              total: number;
            }>(movesUrl, { method: 'POST' });
            logger.info('moves total', totalMoves);
          }
        } catch (error) {
          logger.error(error);
        }
      }
    } catch (error) {
      logger.error(error);
    }
  }
};

main();
