import countries from '@web/json/countries.json';
import { Layout } from '@web/layout';
import { copyToClipboard } from '@web/utils/copy';
import { NextPage } from 'next';
import { ChangeEvent, useState } from 'react';

const FlagsPage: NextPage = () => {
  const [country, setCountry] = useState('');

  const filteredCountries = countries.filter(
    ({ name: { common = '', official = '' } }) => {
      return country !== ''
        ? common.toLowerCase().includes(country.toLowerCase()) ||
            official.toLowerCase().includes(country.toLowerCase())
        : true;
    }
  );
  filteredCountries.sort(
    ({ name: { common: aCommon } }, { name: { common: bCommon } }) =>
      aCommon > bCommon ? 1 : -1
  );

  return (
    <Layout nav>
      <div className='container mx-auto'>
        <div className='p-4 md:p-8'>
          <div className='flex flex-col gap-y-4 md:gap-y-8'>
            <input
              type='text'
              id='country'
              name='country'
              placeholder='Country'
              className='input input-bordered w-full'
              value={country}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setCountry(event.target.value)
              }
            />
            <div className='grid grid-cols-4 items-center gap-4 md:grid-cols-6 md:gap-8 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12'>
              {filteredCountries.map(
                ({ name: { common }, cca2, flag, flags: { svg } }) => {
                  return (
                    <div key={cca2} className='col-span-1'>
                      <div
                        className='overflow-hidden rounded border transition-all hover:scale-150 hover:cursor-pointer'
                        onClick={() => {
                          copyToClipboard(flag);
                        }}>
                        <img src={svg} alt={common} title={common} />
                      </div>
                    </div>
                  );
                }
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
