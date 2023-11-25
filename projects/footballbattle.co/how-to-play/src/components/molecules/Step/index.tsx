import React from 'react';
import Sprite from '../../atoms/Sprite';

export type StepProps = { title: string; image: string; };

export const Arrow: React.FC = () => {
  return (
    <div className="rotate-90 md:rotate-0">
      <div className="flex item-centers justify-center">
        <Sprite
          image="/how-to-play/en/images/steps/arrow.gif"
          className="bg-center bg-contain w-12 h-12 bg-no-repeat rotate-180"
        />
      </div>
    </div>
  );
};

const Step: React.FC<StepProps> = ({ title, image }) => {
  return (
    <div className="flex flex-col justify-center">
      <Sprite
        image={image}
        className="bg-center bg-cover w-16 h-16 mx-auto mb-4"
      />
      <p className="text-center text-white">{title}</p>
    </div>
  );
};

export default Step;
