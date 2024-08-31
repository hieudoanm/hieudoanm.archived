import players from '@web/json/chess/players/2800.json';
import { Layout } from '@web/layout';
import Link from 'next/link';
import { FC } from 'react';

export const Chess2800: FC = () => {
  return (
    <Layout full nav>
      <div className='container mx-auto'>
        <div className='p-4 md:p-8'>
          <div className='rounded-xl border border-base-content'>
            <div className='p-2 md:p-4'>
              <div className='flex items-center justify-between'>
                <p>Players ({players.length})</p>
                <p>Peak Live Rating</p>
              </div>
            </div>
            {players.map(
              ({
                username,
                name,
                live,
              }: {
                username: string;
                name: string;
                live: number;
              }) => {
                return (
                  <div
                    key={username}
                    className='border-t border-base-content p-2 md:p-4'>
                    <div className='flex items-center justify-between'>
                      <Link href={`/apps/chess/players/2800/${username}`}>
                        {name}
                      </Link>
                      <p>{live}</p>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};
