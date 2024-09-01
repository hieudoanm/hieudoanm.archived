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
            <table className='table'>
              <caption className='py-2'>2800 Clubs ({players.length})</caption>
              <thead>
                <tr className='border-t border-base-content'>
                  <th>Username</th>
                  <th>Name </th>
                  <th align='right'>Peak</th>
                </tr>
              </thead>
              <tbody>
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
                      <tr
                        key={username}
                        className='border-t border-base-content'>
                        <td>
                          <Link href={`/apps/chess/players/2800/${username}`}>
                            {username}
                          </Link>
                        </td>
                        <td>{name}</td>
                        <td align='right'>{live}</td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};
