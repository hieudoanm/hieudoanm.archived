import React from 'react';

export const Card: React.FC<{ children: React.ReactNode }> = (
  { children }
) => {
  return (
    <div className="h-full p-8 card-green bg-green rounded-2xl">{children}</div>
  );
};

export default Card;
