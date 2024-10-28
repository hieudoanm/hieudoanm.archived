import { createColumnHelper } from '@tanstack/react-table';
import { TanStackTable } from '@web/components/TanStack/Table';
import { TanstackVirtualTable } from '@web/components/TanStack/VirtualTable';
import { FC, RefObject } from 'react';
import { Country } from '../FlagView';

const NODE_ENV = process.env.NODE_ENV;

const columnHelper = createColumnHelper<Country>();

const columns = [
  columnHelper.accessor('region', {
    id: 'region',
    header: () => 'Region',
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('subregion', {
    id: 'subregion',
    header: () => 'Subregion',
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('cca2', {
    id: 'cca2',
    header: () => 'CCA2',
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('cca3', {
    id: 'cca3',
    header: () => 'CCA3',
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('name.common', {
    id: 'common',
    header: () => 'Name (Common)',
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('name.official', {
    id: 'official',
    header: () => 'Name (Official)',
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('capital', {
    id: 'capital',
    header: () => 'Capital',
    cell: (info) => {
      const capitals: string[] = info.renderValue() ?? [];
      return capitals.join(', ');
    },
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('flag', {
    id: 'flag',
    header: () => 'Flag',
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
];

export const ListView: FC<{
  countries: Country[];
  parentRef: RefObject<HTMLDivElement>;
}> = ({ countries = [], parentRef }) => {
  return (
    <>
      {NODE_ENV === 'production' ? (
        <TanStackTable data={countries} columns={columns} />
      ) : (
        <TanstackVirtualTable
          parentRef={parentRef}
          data={countries}
          columns={columns}
        />
      )}
    </>
  );
};
