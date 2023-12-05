import React from 'react';
import styled from 'styled-components';
import Container from '../../atoms/Container';
import Header from '../../atoms/Header';
import LinearText from '../../atoms/LinearText';
import Section from '../../atoms/Section';
import Sprite from '../../atoms/Sprite';
import Subheader from '../../atoms/Subheader';
import Council from '../../molecules/Council';

const StyledBackground = styled.div`
  background-size: contain;
  bacground-position: top center;
  background-repeat: no-repeat;
  background-image: url(/how-to-play/en/images/join-our-community/background.svg);
`;

export const JoinOurCommunity: React.FC = () => {
  return (
    <div className="bg-[#3BA45E]">
      <StyledBackground>
        <Section>
          <Container>
            <div className="mb-16">
              <div className="mb-4">
                <Header>
                  <LinearText>Join</LinearText> <LinearText>Our</LinearText>
                  {' '}
                  <LinearText>Community</LinearText>
                </Header>
              </div>
              <div className="mb-4">
                <p className="text-center text-[#FFC815] font-karma">
                  #footballbattle
                </p>
              </div>
              <div className="mb-4">
                <Subheader>Own the Football Legends of All Time</Subheader>
              </div>
              <div className="max-w-sm mx-auto">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-1">
                    <a
                      href="https://t.me/footballbattleNFT"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Sprite
                        style={{ paddingBottom: '50%' }}
                        image="https://raw.githubusercontent.com/hieudoanm/cdn/master/images/football-battle/png/telegram-button.png"
                        className="w-full bg-contain bg-no-repeat bg-center"
                      />
                    </a>
                  </div>
                  <div className="col-span-1">
                    <a
                      href="https://discord.com/invite/vqymVPcFSs"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Sprite
                        style={{ paddingBottom: '50%' }}
                        image="https://raw.githubusercontent.com/hieudoanm/cdn/master/images/football-battle/png/discord-button.png"
                        className="w-full bg-contain bg-no-repeat bg-center"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <article>
              <Council />
            </article>
          </Container>
        </Section>
      </StyledBackground>
    </div>
  );
};

export default JoinOurCommunity;
