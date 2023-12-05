import React from 'react';
import Card from '../../atoms/Card';
import CardHeader from '../../atoms/CardHeader';
import DownloadIcon from '../DownloadIcon';

const SmallBall: React.FC = () => {
  return (
    <div
      className="w-8 h-8 bg-contain bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'url(/how-to-play/en/images/meta-mask-wallet/small-ball.svg)'
      }}
    />
  );
};

const Play: React.FC = () => {
  return (
    <div
      className="w-6 h-6 bg-contain bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/how-to-play/en/images/meta-mask-wallet/play.svg)'
      }}
    />
  );
};

const CreateAccount: React.FC = () => {
  return (
    <Card>
      <div className="flex flex-col h-full">
        <div className="flex-none">
          <div className="mb-8">
            <CardHeader>Create Account</CardHeader>
          </div>
        </div>
        <div className="grow">
          <div className="mb-4">
            <p className="text-white text-xs md:text-sm">MetaMask</p>
          </div>
          <div className="mb-12">
            <a href="https://bit.ly/3bJtXmr" target="_blank" rel="noreferrer">
              <DownloadIcon image="/how-to-play/en/images/download/meta-mask-fox.svg" />
            </a>
          </div>
          <div className="mb-8">
            <div className="flex flex-col gap-4 text-white">
              <h4 className="font-karma">What is MetaMask Wallet For?</h4>
              <div className="flex items-center gap-4">
                <div>
                  <SmallBall />
                </div>
                <p className="font-karma text-sm md:text-base">
                  Storing digital assets
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <SmallBall />
                </div>
                <p className="font-karma text-sm md:text-base">
                  Sending blockchain transactions without paying expensive gas
                  fees.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-none">
          <a href="https://bit.ly/3bXegbx" target="_blank" rel="noreferrer">
            <div className="flex items-center gap-4">
              <div>
                <Play />
              </div>
              <p className="text-[#FFC815] font-karma underline text-sm">
                View tutorial
              </p>
            </div>
          </a>
        </div>
      </div>
    </Card>
  );
};

export default CreateAccount;
