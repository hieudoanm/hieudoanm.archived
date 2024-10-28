import React from 'react';
import Navbar from '../../organisms/Navbar';
import Hero from '../../organisms/Hero';
import Steps from '../../organisms/02-Steps';
import MetaMask from '../../organisms/CreateMetaMaskWallet';
import StakeToPlay from '../../organisms/StakeToPlay';
import NFT from '../../organisms/NFT';
import BuildTheTeam from '../../organisms/BuildTheTeam';
import JoinOurCommunity from '../../organisms/JoinOurCommunity';
import Footer from '../../organisms/Footer';

const HowToPlayTemplate: React.FC = () => {
  return (
    <div className="bg-[#136B31]">
      <Navbar />
      <Hero />
      <Steps />
      <MetaMask />
      <StakeToPlay />
      <NFT />
      <BuildTheTeam />
      <JoinOurCommunity />
      <Footer />
    </div>
  );
};

HowToPlayTemplate.displayName = 'HowToPlayTemplate';

export default HowToPlayTemplate;
