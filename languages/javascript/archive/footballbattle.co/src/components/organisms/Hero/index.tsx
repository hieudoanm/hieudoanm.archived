import React from 'react';
import StyledSprite from '../../atoms/Sprite';

const Hero: React.FC = () => {
  return (
    <StyledSprite
      className="bg-cover w-full min-h-screen-1/2 md:min-h-screen bg-center"
      image="https://raw.githubusercontent.com/hieudoanm/cdn/master/images/football-battle/svg/hero/hero.svg"
    />
  );
};

export default Hero;
