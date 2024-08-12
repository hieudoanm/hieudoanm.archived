import { createColumnHelper } from '@tanstack/react-table';
import { TanStackTable } from '@web/components/TanStack/Table';
import { TanstackVirtualTable } from '@web/components/TanStack/VirtualTable';
import openings from '@web/json/chess/openings.json';
import { Layout } from '@web/layout';
import { FC, useRef } from 'react';

const NODE_ENV = process.env.NODE_ENV;

type Opening = { eco: string; name: string; pgn: string };

const columnHelper = createColumnHelper<Opening>();

const columns = [
  columnHelper.accessor('eco', {
    id: 'eco',
    header: () => 'ECO',
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
    filterFn: 'equals',
  }),
  columnHelper.accessor('name', {
    id: 'name',
    header: () => 'Name',
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
    filterFn: 'equals',
  }),
  columnHelper.accessor('pgn', {
    id: 'pgn',
    header: () => 'PGN',
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
    filterFn: 'equals',
  }),
];

export const ChessOpenings: FC = () => {
  const parentRef = useRef<HTMLDivElement>(null);

  return (
    <Layout nav full>
      <div ref={parentRef} className='h-full overflow-y-auto'>
        <div className='container mx-auto'>
          <div className='p-4 md:p-8'>
            <div className='flex flex-col gap-y-4 md:gap-y-8'>
              <h1 className='text-xl'>Openings</h1>
              {NODE_ENV === 'production' ? (
                <TanStackTable data={openings} columns={columns} />
              ) : (
                <TanstackVirtualTable
                  parentRef={parentRef}
                  data={openings}
                  columns={columns}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
