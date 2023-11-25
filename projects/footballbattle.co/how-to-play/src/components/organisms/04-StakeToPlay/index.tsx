import React from 'react';
import Container from '../../atoms/Container';
import Header from '../../atoms/Header';
import LinearText from '../../atoms/LinearText';
import Section from '../../atoms/Section';
import StakeToPlayInstructions from '../../molecules/StakeToPlayInstructions';
import StakeToPlayVideo from '../../molecules/StakeToPlayVideo';

const StakeToPlay: React.FC = () => {
  return (
    <Section id="stake-to-play">
      <Container>
        <div className="mb-16">
          <Header>
            <LinearText>Stake-to-play</LinearText> <LinearText>Game</LinearText>
          </Header>
        </div>
        <article>
          <div className="grid grid-cols-1 md:grid-cols-7 lg:grid-cols-9 gap-8">
            <div className="order-2 md:order-1 col-span-1 md:col-span-3 lg:col-span-4">
              <StakeToPlayInstructions />
            </div>
            <div className="order-1 md:order-2 col-span-1 md:col-span-4 lg:col-span-5">
              <StakeToPlayVideo />
            </div>
          </div>
        </article>
      </Container>
    </Section>
  );
};

export default StakeToPlay;
