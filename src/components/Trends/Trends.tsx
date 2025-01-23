import Link from 'next/link';
import { FC, ReactNode } from 'react';

export const Badge: FC<{ children: ReactNode }> = ({ children = <></> }) => {
  return (
    <div className='border-base-content truncate rounded-lg border px-2 py-1 text-sm capitalize'>
      {children}
    </div>
  );
};

export const Trends: FC<{
  country: string;
  queries: string[];
  defaultChecked: boolean;
}> = ({ country = '', queries = [], defaultChecked = false }) => {
  return (
    <div
      key={country}
      className='join-item collapse-arrow border-base-content collapse border'>
      <input
        type='radio'
        name='accordion-trends'
        defaultChecked={defaultChecked}
      />
      <div className='collapse-title border-base-content border-b capitalize'>
        {country.replaceAll('_', ' ')} ({queries.length})
      </div>
      <div className='collapse-content'>
        <div className='flex flex-wrap gap-x-4 gap-y-4 pt-4'>
          {queries.map((query: string) => {
            const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            return (
              <div key={query}>
                <Link href={url} target='_blank'>
                  <Badge>{query}</Badge>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
