import React from 'react';

export type CardHeaderProps = { children: React.ReactNode };

export const CardHeader: React.FC<CardHeaderProps> = (
  { children = <></> }
) => {
  return <h3 className="text-[#FFB715] text-base md:text-xl">{children}</h3>;
};

export default CardHeader;
