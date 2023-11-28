import { RESTDataSource } from '@apollo/datasource-rest';
import { Game, Opening, Player, Title } from '@prisma/client';
import { TimeRange } from '../../modules/chess/chess.enum';
import { StreamersResponse } from '../../modules/chess/player/steamers/streamers.types';
import { BASE_API } from '../graphql.constants';
import { Country, CountryTotal, GamesSynced, Titled } from './types';

export class ChessDataSource extends RESTDataSource {
  override baseURL = BASE_API;

  async getStreamers({
    title,
    country
  }: {
    title: Title;
    country: string;
  }): Promise<StreamersResponse> {
    const urlSearchParameters: URLSearchParams = new URLSearchParams();
    if (title) { urlSearchParameters.set('title', title); }
    if (country) { urlSearchParameters.set('country', country); }
    const endpoint = `/api/chess/streamers?${urlSearchParameters.toString()}`;
    return this.get(endpoint);
  }

  async getPlayer(username: string): Promise<Player> {
    return this.get(`/api/chess/player/${username}`);
  }

  async syncPlayer(username: string): Promise<Player> {
    return this.post(`/api/chess/player/${username}`);
  }

  async getGames(
    username: string
  ): Promise<{ total: number; games: Game[] }> {
    return this.get(`/api/chess/player/${username}/games`);
  }

  async syncGames(
    username: string,
    {
      month = new Date().getMonth() + 1,
      year = new Date().getFullYear()
    }: { month: number; year: number }
  ): Promise<GamesSynced> {
    return this.post(`/api/chess/player/${username}/games`, {
      body: { month, year }
    });
  }

  async getTitled({
    title,
    timeRange
  }: {
    title: string;
    timeRange: TimeRange;
  }): Promise<Titled> {
    const urlSearchParameters: URLSearchParams = new URLSearchParams();
    if (timeRange) { urlSearchParameters.set('timeRange', timeRange); }
    const url: string =
      `/api/chess/titled/${title}?${urlSearchParameters.toString()}`;
    return this.get(url);
  }

  async getCountries(): Promise<CountryTotal[]> {
    return this.get('/api/chess/countries');
  }

  async getCountry(code: string): Promise<Country> {
    return this.get(`/api/chess/countries/${code}`);
  }

  async getOpenings({
    eco = '',
    name = ''
  }: {
    eco: string;
    name: string;
  }): Promise<{ total: number; openings: Opening[] }> {
    const urlSearchParameters: URLSearchParams = new URLSearchParams();
    if (eco !== '') { urlSearchParameters.set('eco', eco); }
    if (name !== '') { urlSearchParameters.set('name', name); }
    return this.get(`/api/chess/openings?${urlSearchParameters.toString()}`);
  }
}
