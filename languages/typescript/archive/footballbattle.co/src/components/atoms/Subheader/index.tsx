import React from 'react';

export const Subheader: React.FC<{ children?: React.ReactNode }> = ({
  children = <></>,
}) => {
  return (
    <h2 className="text-center text-lg text-white font-karma">{children}</h2>
  );
};

Subheader.displayName = 'Subheader';

export default Subheader;
