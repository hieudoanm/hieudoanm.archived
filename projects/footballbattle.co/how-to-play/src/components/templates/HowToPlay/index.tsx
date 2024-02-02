import React from 'react';
import Navbar from '../../organisms/00-Navbar';
import Hero from '../../organisms/01-Hero';
import Steps from '../../organisms/02-Steps';
import MetaMask from '../../organisms/03-CreateMetaMaskWallet';
import StakeToPlay from '../../organisms/04-StakeToPlay';
import NFT from '../../organisms/05-NFT';
import BuildTheTeam from '../../organisms/06-BuildTheTeam';
import JoinOurCommunity from '../../organisms/07-JoinOurCommunity';
import Footer from '../../organisms/08-Footer';

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
