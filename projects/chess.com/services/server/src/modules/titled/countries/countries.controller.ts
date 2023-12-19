import { ApiTags } from '@nestjs/swagger';
import { CountriesService } from './countries.service';
import { CountriesResponse, CountryCount } from './countries.types';
import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('chess')
@ApiTags('API - Countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get('countries')
  async getCountries(
    @Query('cache') cache: boolean = true
  ): Promise<CountryCount[]> {
    return this.countriesService.getCountries({ cache });
  }

  @Get('countries/:code')
  async getTitledPlayersByCountry(
    @Param('code') code: string,
    @Query('cache') cache: boolean = true
  ): Promise<CountriesResponse> {
    return this.countriesService.getTitledPlayersByCountry({ cache, code });
  }
}
