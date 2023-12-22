import { Player } from '@prisma/client';
import axios from 'axios';
import { TITLES } from '../../../common/constants';
import { logger } from '../../../common/log';

const TITLE = process.env.TITLE ?? '';

const BASE_URL = 'https://chessinsightsapi.vercel.app/api/chess';
const CHESS_COM_URL = 'https://api.chess.com/pub';

const syncTitledPlayers = async (title: string) => {
  try {
    const titleUrl = `${CHESS_COM_URL}/titled/${title}`;
    const {
      data: { players = [] },
    } = await axios.get<{
      players: string[];
    }>(titleUrl);
    players.sort((a: string, b: string) => (a > b ? 1 : -1));
    players.reverse();
    for (const username of players) {
      try {
        const playerUrl = `${BASE_URL}/player/${username}`;
        const { data: player } = await axios.get<Player>(playerUrl);
        logger.info(player);
      } catch (error) {
        logger.error(`error=${error}`);
      }
    }
  } catch (error) {
    logger.error(`error=${error}`);
  }
};

const main = async () => {
  if (TITLE !== '') {
    await syncTitledPlayers(TITLE);
    return;
  }

  for (const title of TITLES) {
    await syncTitledPlayers(title);
  }
};

main();
