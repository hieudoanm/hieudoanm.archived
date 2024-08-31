import countries from '@web/json/countries/countries.json';
import { Layout } from '@web/layout';
import {
  Country,
  FlagView,
} from '@web/router/apps/countries/FlagView/FlagView';
import { ListView } from '@web/router/apps/countries/ListView';
import { NextPage } from 'next';
import { ChangeEvent, useRef, useState } from 'react';

type FilterOptions = {
  name: string;
  region: string;
  subregion: string;
  unitedNationMember: boolean;
};

const filterCountries = (
  countries: Country[],
  filterOptions: FilterOptions
) => {
  const {
    name = '',
    region = '',
    subregion = '',
    unitedNationMember = false,
  } = filterOptions;
  const filteredCountries = countries.filter(
    ({
      name: { common = '', official = '' },
      region: countryRegion = '',
      subregion: countrySubregion = '',
      unMember,
    }) => {
      const lowerName = name.toLowerCase();
      const commonFlag: boolean =
        lowerName !== '' ? common.toLowerCase().includes(lowerName) : true;
      const officialFlag: boolean =
        lowerName !== '' ? official.toLowerCase().includes(lowerName) : true;
      const regionFlag: boolean =
        region !== ''
          ? region.toLowerCase().includes(countryRegion.toLowerCase())
          : true;
      const subregionFlag: boolean =
        subregion !== ''
          ? subregion.toLowerCase().includes(countrySubregion.toLowerCase())
          : true;
      const unitedNationMemberFlag: boolean = unitedNationMember
        ? unMember
        : true;
      return (
        (commonFlag || officialFlag) &&
        regionFlag &&
        subregionFlag &&
        unitedNationMemberFlag
      );
    }
  );
  filteredCountries.sort(
    ({ name: { common: aCommon } }, { name: { common: bCommon } }) =>
      aCommon > bCommon ? 1 : -1
  );
  return filteredCountries;
};

const getFilterOptions = (): { regions: string[]; subregions: string[] } => {
  // Region Options
  const regions: string[] = [
    ...new Set(countries.map(({ region }: { region: string }) => region)),
  ];
  regions.sort((a, b) => (a > b ? 1 : -1));
  // Subregion Options
  const subregions: string[] = [
    ...new Set(
      countries
        .map(({ subregion }: { subregion?: string }) => subregion ?? '')
        .filter((subregion: string) => subregion !== '')
    ),
  ];
  subregions.sort((a, b) => (a > b ? 1 : -1));
  // Filter Options
  return { regions, subregions };
};

const FlagsPage: NextPage = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const { regions = [], subregions = [] } = getFilterOptions();
  const [view, setView] = useState<'flag' | 'list'>('list');
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    name: '',
    region: '',
    subregion: '',
    unitedNationMember: false,
  });
  const filteredCountries: Country[] = filterCountries(
    countries as Country[],
    filterOptions
  );

  return (
    <Layout nav full>
      <div className='container mx-auto h-full overflow-hidden'>
        <div className='h-full p-4 md:p-8'>
          <div className='flex h-full flex-col gap-y-4 md:gap-y-8'>
            <div className='grid grid-cols-1 items-center gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-4'>
              <div className='col-span-1'>
                <div className='form-control'>
                  <label className='label cursor-pointer'>
                    <span className='label-text'>United Nation Member</span>
                    <input
                      type='checkbox'
                      className='toggle'
                      checked={filterOptions.unitedNationMember}
                      onChange={() => {
                        setFilterOptions((previous) => ({
                          ...previous,
                          unitedNationMember: !previous.unitedNationMember,
                        }));
                      }}
                    />
                  </label>
                </div>
              </div>
              <div className='col-span-1'>
                <input
                  type='text'
                  id='name'
                  name='name'
                  placeholder='Name'
                  className='input input-bordered w-full'
                  value={filterOptions.name}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setFilterOptions((previous) => ({
                      ...previous,
                      name: event.target.value,
                    }))
                  }
                />
              </div>
              <div className='col-span-1'>
                <select
                  name='region'
                  className='select select-bordered w-full'
                  value={filterOptions.region}
                  onChange={(event) =>
                    setFilterOptions({
                      ...filterOptions,
                      region: event.target.value,
                    })
                  }>
                  <option value=''>Region</option>
                  {regions.map((region: string) => (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
              </div>
              <div className='col-span-1'>
                <select
                  name='subregion'
                  className='select select-bordered w-full'
                  value={filterOptions.subregion}
                  onChange={(event) =>
                    setFilterOptions({
                      ...filterOptions,
                      subregion: event.target.value,
                    })
                  }>
                  <option value=''>Subregion</option>
                  {subregions.map((subregion: string) => (
                    <option key={subregion} value={subregion}>
                      {subregion}
                    </option>
                  ))}
                </select>
              </div>
              <div className='col-span-1 md:col-span-2 lg:col-span-4'>
                <div className='join w-full'>
                  <button
                    type='button'
                    className={`btn join-item btn-sm w-[50%] ${view === 'flag' ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => setView('flag')}>
                    Flag
                  </button>
                  <button
                    type='button'
                    className={`btn join-item btn-sm w-[50%] ${view === 'list' ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => setView('list')}>
                    List
                  </button>
                </div>
              </div>
            </div>
            <div className='grow overflow-auto' ref={parentRef}>
              {view === 'flag' ? (
                <FlagView countries={filteredCountries} />
              ) : (
                <></>
              )}
              {view === 'list' ? (
                <ListView countries={filteredCountries} parentRef={parentRef} />
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const dynamic = 'force-static';

export default FlagsPage;
