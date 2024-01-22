import React from 'react';
import Card from '../../atoms/Card';
import CardHeader from '../../atoms/CardHeader';
import Sprite from '../../atoms/Sprite';
import DownloadIcon from '../DownloadIcon';

const DownloadAndSetUp: React.FC = () => {
  return (
    <Card>
      <div className="flex flex-col h-full">
        <div className="flex-none">
          <div className="mb-8">
            <CardHeader>Download & Set Up</CardHeader>
          </div>
        </div>
        <div className="grow">
          <div className="mb-4">
            <p className="text-white text-xs md:text-sm">Extension</p>
          </div>
          <div className="mb-12">
            <div className="flex gap-8">
              <a href="https://bit.ly/3bYHlU5" target="_blank" rel="noreferrer">
                <DownloadIcon image="/how-to-play/en/images/download/chrome.svg" />
              </a>
              <a href="https://mzl.la/3yMRV9D" target="_blank" rel="noreferrer">
                <DownloadIcon image="/how-to-play/en/images/download/firefox.svg" />
              </a>
            </div>
          </div>
          <div className="mb-8">
            <div className="flex flex-col gap-4">
              <p className="text-white text-xs md:text-sm">Mobile App</p>
              <a href="https://bit.ly/3ymLloN" target="_blank" rel="noreferrer">
                <Sprite
                  image="/how-to-play/en/images/download/apple-app-store.svg"
                  className="w-44 h-12 bg-contain bg-no-repeat"
                />
              </a>
              <a
                href="https://apps.apple.com/us/app/metamask-blockchain-wallet/id1438144202"
                target="_blank"
                rel="noreferrer">
                <Sprite
                  image="/how-to-play/en/images/download/google-play-store.svg"
                  className="w-44 h-12 bg-contain bg-no-repeat"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex-none">
          <p className="text-white font-karma text-sm md:text-base">
            Still need help?{' '}
            <a
              href="https://bit.ly/3ArxJvc"
              className="text-[#FFC815] underline">
              Watch community-made tutorial
            </a>
          </p>
        </div>
      </div>
    </Card>
  );
};

export default DownloadAndSetUp;
