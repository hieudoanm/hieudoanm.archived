import { Player } from '@prisma/client';
import axios from 'axios';
import { logger } from '../../../common/log';

const USERNAME = process.env.USERNAME ?? '';

const BASE_URL = 'https://chessinsightsapi.vercel.app/api/chess';

const syncGames = async (username: string) => {
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
        const year: number = Number.parseInt(yyyy, 10);
        const month: number = Number.parseInt(mm, 10);
        const gamesUrl = `${BASE_URL}/player/${username}/games`;
        const data = { year, month };
        logger.info(`gamesUrl ${gamesUrl}`);
        const { data: syncedData } = await axios.request<{
          total: number;
          synced: number;
          existed: number;
        }>({
          url: gamesUrl,
          method: 'post',
          data: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' }
        });
        const { total = 0, synced = 0, existed = 0 } = syncedData;
        logger.info(`games year=${year} month=${month}`, {
          total,
          synced,
          existed
        });
      } catch (error) {
        logger.error(`error=${error}`);
      }
    }
  } catch (error) {
    logger.error(error);
  }
};

const main = async () => {
  if (USERNAME !== '') {
    await syncGames(USERNAME);
    return;
  }

  const usernames: string[] = ['thedarkknighttrilogy', 'hikaru'];
  for (const username of usernames) {
    await syncGames(username);
  }
};

main();
