import axios from 'axios';
import { logger } from '../../libs/log';
import { addZero } from '../../utils/add-zero';
import {
  ChessFullPlayer,
  ChessGame,
  ChessPlayer,
  ChessStats,
  ChessTitle
} from './types';

const BASE_URL = 'https://api.chess.com/pub';

export const TITLES: ChessTitle[] = [
  'GM',
  'IM',
  'FM',
  'CM',
  'NM',
  'WGM',
  'WIM',
  'WFM',
  'WCM',
  'WNM'
];

export class ChessClient {
  async getChessPlayer(username: string): Promise<ChessPlayer> {
    const url = `${BASE_URL}/player/${username}`;
    logger.info(`getChessPlayer url=${url}`);
    const { data } = await axios.get<ChessPlayer>(url);
    return data;
  }

  async getChessStats(username: string): Promise<ChessStats> {
    const url = `${BASE_URL}/player/${username}/stats`;
    logger.info(`getChessStats url=${url}`);
    const { data } = await axios.get<ChessStats>(url);
    return data;
  }

  async getChessArchives(username: string): Promise<string[]> {
    const url = `${BASE_URL}/player/${username}/games/archives`;
    logger.info(`getChessArchives url=${url}`);
    const { data } = await axios.get<{ archives: string[] }>(url);
    return data.archives || [];
  }

  async getChessGamesByYearAndMonth(
    username: string,
    year: number,
    month: number
  ): Promise<ChessGame[]> {
    const yyyy: string = addZero(year);
    const mm: string = addZero(month);
    const url = `${BASE_URL}/player/${username}/games/${yyyy}/${mm}`;
    logger.info(`getChessGamesByYearAndMonth url=${url}`);
    const { data } = await axios.get<{ games: ChessGame[] }>(url);
    return data.games || [];
  }

  async getChessFullPlayer(username: string): Promise<ChessFullPlayer> {
    const player = await this.getChessPlayer(username);
    const stats = await this.getChessStats(username);
    const archives = await this.getChessArchives(username);
    return { ...player, stats, archives };
  }

  async getChessGames(
    username: string,
    { month = 0, year = 0 }: { month: number; year: number }
  ): Promise<ChessGame[]> {
    const archives = await this.getChessArchives(username);
    const filterArchives = archives.filter((archive: string) => {
      const [yearPath = '', monthPath = ''] = archive.split('/').slice(-2);
      const monthFlag: boolean = month === 0
        ? true
        : addZero(month) === monthPath;
      const yearFlag: boolean = year === 0 ? true : addZero(year) === yearPath;
      return monthFlag && yearFlag;
    });
    logger.info(`filterArchives ${JSON.stringify(filterArchives)}`);
    const promiseArchives = filterArchives.map(async (archive: string) => {
      try {
        const { data } = await axios.get<{ games: ChessGame[] }>(archive);
        const games = data.games || [];
        games.sort((a, b) => (a > b ? 1 : -1));
        return games;
      } catch (error) {
        logger.error(archive, error);
        return [];
      }
    });
    const responses: ChessGame[][] = await Promise.all(promiseArchives);
    return responses.flat();
  }

  async getChessTitledPlayers(title: ChessTitle): Promise<string[]> {
    const url = `${BASE_URL}/titled/${title}`;
    logger.info(`getChessTitledPlayers url=${url}`);
    const { data } = await axios.get<{ players: string[] }>(url);
    return data.players || [];
  }
}
