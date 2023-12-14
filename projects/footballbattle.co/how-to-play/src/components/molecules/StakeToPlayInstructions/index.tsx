import React from 'react';
import BlueButton from '../../atoms/BlueButton';
import Sprite from '../../atoms/Sprite';
import YellowButton from '../../atoms/YellowButton';

const ArrowDown: React.FC = () => {
  return (
    <div className="w-12 h-12 flex items-center">
      <div
        className="w-12 h-4 bg-contain bg-no-repeat bg-center"
        style={{
          backgroundImage:
            'url(/how-to-play/en/images/stake-to-play/arrow.svg)',
        }}
      />
    </div>
  );
};

const Circle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Sprite
      image="/how-to-play/en/images/stake-to-play/circle.svg"
      className="w-12 h-12 bg-cover"
    >
      <div className="text-yellow text-xs w-full h-full flex justify-center items-center">
        {children}
      </div>
    </Sprite>
  );
};

const Instruction: React.FC<{ step: string; children: React.ReactNode }> = ({
  step,
  children = <></>,
}) => {
  return (
    <div className="flex items-center gap-x-4">
      <button type="button">
        <Circle>{step}</Circle>
      </button>
      <div className="text-white font-karma">{children}</div>
    </div>
  );
};

const StakeToPlayInstructions: React.FC = () => {
  return (
    <div>
      <div className="mb-8">
        <Instruction step="01">
          Visit{' '}
          <a
            href="https://marketplace.footballbattle.co"
            target="_blank"
            rel="noreferrer"
            className="text-yellow underline"
          >
            Markerplace
          </a>
        </Instruction>
        <ArrowDown />
        <Instruction step="02">
          Click <span className="text-yellow">My Account</span>
        </Instruction>
        <ArrowDown />
        <Instruction step="03">
          Choose <span className="text-yellow">Staking tab</span>
        </Instruction>
        <ArrowDown />
        <Instruction step="04">
          Input{' '}
          <span className="text-yellow">
            the number of FBL you want to stake & proceed
          </span>
        </Instruction>
      </div>
      <div className="flex items-center gap-8">
        <a href="https://bit.ly/3nHxVyL" target="_blank" rel="noreferrer">
          <BlueButton>
            <div className="text-xs md:text-base text-white">FBL TOKEN</div>
          </BlueButton>
        </a>
        <a href="https://bit.ly/3ypHdnY" target="_blank" rel="noreferrer">
          <YellowButton>
            <div className="text-darkRed text-xs md:text-base">FBT TOKEN</div>
          </YellowButton>
        </a>
      </div>
    </div>
  );
};

export default StakeToPlayInstructions;
