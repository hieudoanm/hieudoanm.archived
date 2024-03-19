import { Navbar } from '@younetmedia/common/components/Navbar';
import { ReactNode } from 'react';

export const LayoutTemplate: React.FC<{ children?: ReactNode }> = ({
  children = <></>,
}) => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <main className="grow">{children}</main>
    </div>
  );
};
