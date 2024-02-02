import React from 'react';

export const Header: React.FC<{ children?: React.ReactNode }> = ({
  children = <></>,
}) => {
  return (
    <>
      <div className="hidden md:block">
        <h1 className="text-center uppercase text-3xl">{children}</h1>
      </div>
      <div className="block md:hidden">
        <h1 className="text-center uppercase text-xl">{children}</h1>
      </div>
    </>
  );
};

Header.displayName = 'Header';
Header.defaultProps = { children: <></> };

export default Header;
