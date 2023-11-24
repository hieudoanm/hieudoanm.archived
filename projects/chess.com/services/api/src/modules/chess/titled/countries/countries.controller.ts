import { Controller, Get, Path, Query, Route, Tags } from 'tsoa';
import { CountriesService } from './countries.service';
import { CountriesResponse, CountryCount } from './countries.types';

@Route('chess')
@Tags('API - Countries', 'external - chess.com')
export class CountriesController extends Controller {
  private countriesService: CountriesService;

  constructor() {
    super();
    this.countriesService = new CountriesService();
  }

  @Get('countries')
  async getCountries(
    @Query('cache') cache: boolean = true
  ): Promise<CountryCount[]> {
    return this.countriesService.getCountries({ cache });
  }

  @Get('countries/:code')
  async getTitledPlayersByCountry(
    @Path('code') code: string,
    @Query('cache') cache: boolean = true
  ): Promise<CountriesResponse> {
    return this.countriesService.getTitledPlayersByCountry({ cache, code });
  }
}
