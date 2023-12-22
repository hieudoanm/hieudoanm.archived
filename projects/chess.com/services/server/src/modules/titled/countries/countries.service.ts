import { Injectable } from '@nestjs/common';
import { getRedisClient, RedisClient } from 'src/common/databases/redis';
import { REDIS_URI } from 'src/common/environments';
import { CountriesResponseDto, CountryResponseDto } from './countries.dto';
import { CountriesRepository } from './countries.repository';

@Injectable()
export class CountriesService {
  private countriesRepository: CountriesRepository;
  private redisClient: RedisClient;

  constructor() {
    this.redisClient = getRedisClient(REDIS_URI);
    this.countriesRepository = new CountriesRepository();
  }

  public async getCountries({
    cache = true,
  }: {
    cache: boolean;
  }): Promise<CountryResponseDto[]> {
    const key: string = `chess-countries`.toLowerCase();
    if (cache) {
      const cacheCountries =
        await this.redisClient.getObject<CountryResponseDto[]>(key);
      if (cacheCountries) {
        return cacheCountries;
      }
    }
    const countries: CountryResponseDto[] =
      await this.countriesRepository.getCountries();
    await this.redisClient.setObject<CountryResponseDto[]>(key, countries, {
      expiresInSeconds: 30 * 60, // 30 minutes
    });
    return countries;
  }

  public async getTitledPlayersByCountry({
    cache = true,
    code,
  }: {
    cache: boolean;
    code: string;
  }): Promise<CountriesResponseDto> {
    const key: string = `chess-country-${code}`.toLowerCase();
    if (cache) {
      const cacheCountryStats =
        await this.redisClient.getObject<CountriesResponseDto>(key);
      if (cacheCountryStats) {
        return cacheCountryStats;
      }
    }
    const countryStats: CountriesResponseDto =
      await this.countriesRepository.getTitledPlayersByCountry(code);
    await this.redisClient.setObject<CountriesResponseDto>(key, countryStats, {
      expiresInSeconds: 30 * 60, // 30 minutes
    });
    return countryStats;
  }
}
