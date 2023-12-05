import {
  getRedisClient,
  RedisClient
} from '../../../../common/databases/redis';
import { REDIS_URI } from '../../../../common/environments';
import { CountriesRepository } from './countries.repository';
import { CountriesResponse, CountryCount } from './countries.types';

export class CountriesService {
  private countriesRepository: CountriesRepository;
  private redisClient: RedisClient;

  constructor() {
    this.redisClient = getRedisClient(REDIS_URI);
    this.countriesRepository = new CountriesRepository();
  }

  public async getCountries({
    cache = true
  }: {
    cache: boolean;
  }): Promise<CountryCount[]> {
    const key: string = `chess-countries`.toLowerCase();
    if (cache) {
      const cacheCountries = await this.redisClient.getObject<CountryCount[]>(
        key
      );
      if (cacheCountries) { return cacheCountries; }
    }
    const countries: CountryCount[] = await this.countriesRepository
      .getCountries();
    await this.redisClient.setObject<CountryCount[]>(key, countries, {
      expiresInSeconds: 30 * 60 // 30 minutes
    });
    return countries;
  }

  public async getTitledPlayersByCountry({
    cache = true,
    code
  }: {
    cache: boolean;
    code: string;
  }): Promise<CountriesResponse> {
    const key: string = `chess-country-${code}`.toLowerCase();
    if (cache) {
      const cacheCountryStats = await this.redisClient.getObject<
        CountriesResponse
      >(key);
      if (cacheCountryStats) { return cacheCountryStats; }
    }
    const countryStats: CountriesResponse = await this.countriesRepository
      .getTitledPlayersByCountry(code);
    await this.redisClient.setObject<CountriesResponse>(key, countryStats, {
      expiresInSeconds: 30 * 60 // 30 minutes
    });
    return countryStats;
  }
}
