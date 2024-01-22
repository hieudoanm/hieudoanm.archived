import React from 'react';
import Sprite from '../../atoms/Sprite';

const ArrowDown: React.FC = () => {
  return (
    <div className="w-8 h-8">
      <div className="w-full h-full flex items-center justify-center">
        &#9660;
      </div>
    </div>
  );
};

const Circle: React.FC<{ background?: string; children: React.ReactNode }> = ({
  children,
  background = '',
}) => {
  return (
    <div
      className={`w-8 h-8 flex justify-center items-center border border-black rounded-full ${background}`}>
      {children}
    </div>
  );
};

const Instruction: React.FC<{
  background?: string;
  step: string;
  children: React.ReactNode;
}> = ({ background = '', step, children = <></> }) => {
  return (
    <div className="flex items-center gap-x-4">
      <button type="button">
        <Circle background={background}>{step}</Circle>
      </button>
      <div className="font-abel">{children}</div>
    </div>
  );
};

const StakeToPlayInstructions: React.FC = () => {
  return (
    <div>
      <div className="mb-8">
        <Instruction step="01" background="bg-[#C9C9C9]">
          Start collecting now
        </Instruction>
        <ArrowDown />
        <Instruction step="02">Click My Account</Instruction>
        <ArrowDown />
        <Instruction step="03">Choose Staking tab</Instruction>
        <ArrowDown />
        <Instruction step="04">
          Input the number of FBL you want to stake & proceed
        </Instruction>
      </div>
    </div>
  );
};

export default StakeToPlayInstructions;
