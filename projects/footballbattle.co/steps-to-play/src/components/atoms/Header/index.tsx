import React from 'react';

export const Header: React.FC<{ children?: React.ReactNode }> = ({
  children = <></>,
}) => {
  return (
    <h1 className="text-center text-xl md:text-3xl font-anton">{children}</h1>
  );
};

Header.displayName = 'Header';
Header.defaultProps = { children: <></> };

export default Header;
