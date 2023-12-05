import React from 'react';
import StyledSprite from '../Sprite';

type PositionProps = {
  image: string;
  title: React.ReactNode;
  paddingBottom?: string;
};

export const Position: React.FC<PositionProps> = ({
  image,
  title,
  paddingBottom = '180%'
}) => {
  return (
    <div>
      <div className="border border-black rounded-xl">
        <div className="py-4 px-4">
          <StyledSprite
            image={image}
            style={{ paddingBottom }}
            className="bg-cover bg-center mb-4"
          />
        </div>
      </div>
      <div className="text-center font-abel mt-4">{title}</div>
    </div>
  );
};

export default Position;
