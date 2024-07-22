import { Query, Resolver } from '@nestjs/graphql';
import { Country } from './countries.dto';
import { CountriesService } from './countries.service';

@Resolver((of) => [Country])
export class CountriesResolver {
  constructor(private countriesService: CountriesService) {}

  @Query((returns) => [Country], { name: 'countries' })
  async countries() {
    return this.countriesService.getCountries();
  }
}
