import { Navbar } from '@younetmedia/components/Navbar';
import { FC, ReactNode } from 'react';

export const LayoutTemplate: FC<{ children?: ReactNode }> = ({
  children = <></>,
}) => {
  return (
    <div className="flex h-screen flex-col">
      <Navbar />
      <main className="grow">{children}</main>
    </div>
  );
};
