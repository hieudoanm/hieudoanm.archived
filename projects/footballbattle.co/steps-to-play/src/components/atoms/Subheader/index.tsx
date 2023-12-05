import React from 'react';

export const Subheader: React.FC<{ children?: React.ReactNode }> = ({
  children = <></>
}) => {
  return (
    <h2 className="text-center text-lg text-[#858585] font-abel">{children}</h2>
  );
};

Subheader.displayName = 'Subheader';
Subheader.defaultProps = { children: <></> };

export default Subheader;
