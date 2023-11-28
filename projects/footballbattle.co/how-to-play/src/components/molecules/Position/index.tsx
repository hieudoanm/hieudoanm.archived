import React from 'react';

type PositionProps = { image: string; title: React.ReactNode };

export const Position: React.FC<PositionProps> = ({ image, title }) => {
  return (
    <div>
      <div
        className="bg-cover bg-center mb-4"
        style={{
          paddingBottom: '130%',
          backgroundImage: `url(${image})`
        }}
      />
      <div className="text-center text-white font-karma">{title}</div>
    </div>
  );
};

export default Position;
