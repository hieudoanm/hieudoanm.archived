import React from 'react';
import StyledSprite from '../../atoms/Sprite';

const DownloadIcon: React.FC<{ image: string; }> = ({ image }) => {
  return (
    <StyledSprite
      image="/how-to-play/en/images/meta-mask-wallet/box.svg"
      className="w-24 h-24 bg-center bg-cover"
    >
      <div className="flex items-center justify-center w-full h-full">
        <StyledSprite
          image={image}
          className="w-16 h-16 bg-center bg-no-repeat bg-contain"
        />
      </div>
    </StyledSprite>
  );
};

export default DownloadIcon;
