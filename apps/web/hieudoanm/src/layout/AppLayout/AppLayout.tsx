import { AppFooter } from '@web/layout/AppFooter';
import { AppNavbar } from '@web/layout/AppNavbar';
import { FC, ReactNode } from 'react';
import { TbMathFunction } from 'react-icons/tb';

export type AppLayoutProps = {
  nav?: boolean;
  navBorder?: boolean;
  full?: boolean;
  footer?: boolean;
  footerBorder?: boolean;
  footerContent?: ReactNode;
  children?: ReactNode;
};

export const AppLayout: FC<AppLayoutProps> = ({
  nav = false,
  navBorder = false,
  full = false,
  footer = false,
  footerBorder = false,
  footerContent = <TbMathFunction />,
  children = <></>,
}) => {
  const height: string = full ? 'h-screen overflow-hidden' : 'min-h-screen';

  return (
    <div className={`flex flex-col ${height}`}>
      {nav ? <AppNavbar border={navBorder} /> : <></>}
      <div className='grow overflow-auto'>{children}</div>
      {footer ? (
        <AppFooter border={footerBorder}>{footerContent}</AppFooter>
      ) : (
        <></>
      )}
    </div>
  );
};
