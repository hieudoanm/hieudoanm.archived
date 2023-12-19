import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CountriesService } from './countries.service';
import { CountriesResponse, CountryCount } from './countries.types';
import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('countries')
@ApiTags('Countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get()
  @ApiResponse({ status: 200 })
  async getCountries(
    @Query('cache') cache: boolean = true
  ): Promise<CountryCount[]> {
    return this.countriesService.getCountries({ cache });
  }

  @Get(':code')
  @ApiResponse({ status: 200 })
  async getTitledPlayersByCountry(
    @Param('code') code: string,
    @Query('cache') cache: boolean = true
  ): Promise<CountriesResponse> {
    return this.countriesService.getTitledPlayersByCountry({ cache, code });
  }
}
