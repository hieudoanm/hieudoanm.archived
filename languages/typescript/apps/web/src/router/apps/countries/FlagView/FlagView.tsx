import { copyToClipboard } from '@web/utils/copy';
import { FC } from 'react';

export type Country = {
  name: { common: string; official: string };
  capital: string[];
  region: string;
  subregion: string;
  cca2: string;
  cca3: string;
  flag: string;
  flags: { svg: string };
  unMember: boolean;
};

type CountriesBySubregion = { subregion: string; countries: Country[] };

const groupCountriesBySubregions = (
  countries: Country[]
): CountriesBySubregion[] => {
  const subregions: string[] = [
    ...new Set(countries.map(({ subregion }) => subregion)),
  ];
  subregions.sort();
  const countriesBySubregions = subregions.map((subregion: string) => {
    const countriesBySubregion = countries.filter(
      ({ subregion: countrySubregion }) => countrySubregion === subregion
    );
    return { subregion, countries: countriesBySubregion };
  });
  return countriesBySubregions;
};

type CountriesByRegion = {
  total: number;
  region: string;
  countriesBySubregions: CountriesBySubregion[];
};

const groupCountriesByRegions = (countries: Country[]): CountriesByRegion[] => {
  const regions: string[] = [...new Set(countries.map(({ region }) => region))];
  regions.sort();
  const countriesByRegions = regions.map((region: string) => {
    const countriesByRegion = countries.filter(
      ({ region: countryRegion }) => countryRegion === region
    );
    const countriesBySubregions = groupCountriesBySubregions(countriesByRegion);
    return {
      total: countriesByRegion.length,
      region,
      countriesBySubregions,
    };
  });
  return countriesByRegions;
};

export const FlagView: FC<{
  countries: Country[];
}> = ({ countries = [] }) => {
  const countriesByRegions: CountriesByRegion[] =
    groupCountriesByRegions(countries);

  return (
    <div className='flex flex-col gap-y-4 md:gap-y-8'>
      {countriesByRegions.map(
        ({ total = 0, region = '', countriesBySubregions = [] }) => {
          return (
            <div key={region} className='flex flex-col gap-y-4 md:gap-y-8'>
              <p className='text-lg'>
                <b>
                  {region} ({total})
                </b>
              </p>
              {countriesBySubregions.map(({ subregion, countries }) => {
                return (
                  <div
                    key={subregion}
                    className='flex flex-col gap-y-4 md:gap-y-8'>
                    <p className='text-base'>
                      {subregion} ({countries.length})
                    </p>
                    <div className='grid grid-cols-2 items-center gap-2 md:grid-cols-4 md:gap-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10'>
                      {countries.map(
                        ({
                          name: { common = '', official = '' },
                          cca2 = '',
                          cca3 = '',
                          flag,
                          flags: { svg },
                          capital = [],
                        }) => {
                          return (
                            <div key={`${cca2}-${cca3}`} className='col-span-1'>
                              <div
                                className='overflow-hidden transition-all hover:scale-150 hover:cursor-pointer'
                                onClick={() => {
                                  copyToClipboard(flag);
                                }}>
                                <div className='flex aspect-square w-full items-center'>
                                  <img
                                    src={svg}
                                    alt={official}
                                    title={official}
                                  />
                                </div>
                              </div>
                              <div className='flex flex-col gap-y-1'>
                                <p className='truncate text-center text-sm'>
                                  {cca2} - {cca3}
                                </p>
                                <p
                                  className='truncate text-center text-sm'
                                  title={common}>
                                  {common}
                                </p>
                                <p
                                  className='truncate text-center text-xs'
                                  title={capital.join(', ')}>
                                  ({capital.join(', ')})
                                </p>
                              </div>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        }
      )}
    </div>
  );
};
