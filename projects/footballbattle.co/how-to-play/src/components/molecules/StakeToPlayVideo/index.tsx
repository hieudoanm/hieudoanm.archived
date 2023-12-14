import React from 'react';
import Sprite from '../../atoms/Sprite';

const StakeToPlayVideo: React.FC = () => {
  return (
    <a href="https://bit.ly/3O2YWHT" target="_blank" rel="noreferrer">
      <div
        className="card-field bg-contain p-8 rounded-2xl"
        style={{
          backgroundPositionX: '25%',
          backgroundImage:
            'url(/how-to-play/en/images/stake-to-play/field.svg)',
        }}
      >
        <div className="grid grid-cols-5 md:grid-cols-7 lg:grid-cols-9">
          <div className="col-span-2 md:col-span-3 lg:col-span-4">
            <div className="flex justify-center items-center w-full h-full">
              <div className="w-full h-full px-2 py-4 bg-[#5CAB40]">
                <Sprite
                  image="/how-to-play/en/images/stake-to-play/player-card.svg"
                  className="w-full bg-cover"
                  style={{ paddingBottom: '100%' }}
                />
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex justify-center items-center w-full h-full">
              <div>
                <Sprite
                  image="/how-to-play/en/images/stake-to-play/play.svg"
                  className="w-8 h-8 bg-cover"
                />
              </div>
            </div>
          </div>
          <div className="col-span-2 md:col-span-3 lg:col-span-4">
            <div className="flex justify-start items-center w-full h-full">
              <div className="uppercase text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl text-white text-center">
                <div>How</div>
                <div>TO</div>
                <div>STAKE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default StakeToPlayVideo;
