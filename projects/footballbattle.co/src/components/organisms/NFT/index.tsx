import React from 'react';
import Container from '../../atoms/Container';
import Header from '../../atoms/Header';
import LinearText from '../../atoms/LinearText';
import Section from '../../atoms/Section';
import Subheader from '../../atoms/Subheader';
import NFTCard from '../../molecules/NFTCard';

const NFT: React.FC = () => {
  return (
    <Section id="build-the-team">
      <Container>
        <div className="mb-16">
          <div className="mb-4">
            <Header>
              <LinearText>Get</LinearText> <LinearText>5</LinearText>{' '}
              <LinearText>players</LinearText> <LinearText>to</LinearText>{' '}
              <LinearText>start</LinearText> <LinearText>game</LinearText>
            </Header>
          </div>
          <Subheader>There are two ways to get NFTs</Subheader>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <NFTCard
              title="Buy Players On Our Marketplace"
              description="Deposit Token on MetaMask and buy card from the Marketplace."
              action="BUY NOW"
              href="https://bit.ly/3yMv4La"
              image="https://raw.githubusercontent.com/hieudoanm/cdn/master/images/football-battle/svg/nft/buy-now.svg"
            />
          </div>
          <div>
            <NFTCard
              title="Rent NFT"
              description="It is a system where you can rent players without purchasing
                  them."
              action="COMING SOON"
              href="#"
              image="https://raw.githubusercontent.com/hieudoanm/cdn/master/images/football-battle/svg/nft/rent-now.svg"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default NFT;
