import React from 'react';
import Sprite from '../../atoms/Sprite';

const Hero: React.FC = () => {
  return (
    <div className="w-2/3 mx-auto">
      <div className="grid grid-cols-4">
        <div className="col-span-1"></div>
        <div className="col-span-3">
          <div className="mb-8">
            <h1 className="text-[#40A255] text-6xl">Welcome, New Players</h1>
          </div>
          <div className="mb-8">
            <p className="capitalize">
              Are you ready to make history on the pitch!
            </p>
          </div>
          <div className="mb-8">
            <p className="capitalize">
              Football battle is a game about collecting Football Players Cards,
              building formations and compete with other collectors. More than
              just a game, Football Battle is a big league with a huge active
              and close-knit community.
            </p>
          </div>
          <div className="mb-8">
            <p className="capitalize">
              This New Player Guide contains all of the basic info that you will
              need to get started as a new player. We&apos;re happy to have you
              here.
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-xl overflow-hidden">
        <Sprite
          image="https://raw.githubusercontent.com/hieudoanm/cdn/master/images/football-battle/svg/welcome/hero/hero.svg"
          style={{ paddingBottom: '60%' }}
          className="bg-center bg-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
