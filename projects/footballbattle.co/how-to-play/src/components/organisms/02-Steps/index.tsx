import React from 'react';
import Container from '../../atoms/Container';
import Section from '../../atoms/Section';
import Step, { Arrow } from '../../molecules/Step';

export const Steps: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    document.querySelector(`#${sectionId}`)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div
      className="py-4 bg-[#085723] bg-repeat-x bg-bottom"
      style={{
        backgroundImage: 'url(/how-to-play/en/images/steps/background.svg)'
      }}
    >
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-15 gap-8 md:gap-0">
            <div className="col-span-1 md:col-span-3">
              <div
                className="cursor-pointer"
                onClick={() => scrollToSection('create-meta-mask-wallet')}
              >
                <Step
                  image="/how-to-play/en/images/steps/create.svg"
                  title="Create MetaMask Wallet"
                />
              </div>
            </div>
            <div className="col-span-1">
              <Arrow />
            </div>
            <div className="col-span-1 md:col-span-3">
              <div
                className="cursor-pointer"
                onClick={() => scrollToSection('stake-to-play')}
              >
                <Step
                  image="/how-to-play/en/images/steps/stake.svg"
                  title="Stake Now"
                />
              </div>
            </div>
            <div className="col-span-1">
              <Arrow />
            </div>
            <div className="col-span-1 md:col-span-3">
              <div
                className="cursor-pointer"
                onClick={() => scrollToSection('build-the-team')}
              >
                <Step
                  image="/how-to-play/en/images/steps/build.svg"
                  title="Build Dream Team"
                />
              </div>
            </div>
            <div className="col-span-1">
              <Arrow />
            </div>
            <div className="col-span-1 md:col-span-3">
              <a
                id="explore-our-game"
                href="https://marketplace.footballbattle.co/"
                target="_blank"
                rel="noreferrer"
              >
                <Step
                  image="/how-to-play/en/images/steps/explore.svg"
                  title="Explore Our Game"
                />
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Steps;
