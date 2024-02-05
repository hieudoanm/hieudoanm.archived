import React from 'react';
import Container from '../../atoms/Container';
import Section from '../../atoms/Section';
import Sprite from '../../atoms/Sprite';
import Position from '../../molecules/Position';

const BuildTheTeam: React.FC = () => {
  return (
    <Section>
      <Container>
        <div className="hidden md:block">
          <Sprite
            image="/how-to-play/en/images/build-the-team/title-desktop.svg"
            className="h-16 bg-no-repeat bg-contain bg-center mb-16"
          />
        </div>
        <div className="block md:hidden">
          <Sprite
            image="/how-to-play/en/images/build-the-team/title-mobile.svg"
            className="h-16 bg-no-repeat bg-contain bg-center mb-16"
          />
        </div>
        <article>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="col-span-1">
              <Position
                image="/how-to-play/en/images/build-the-team/gk.svg"
                title="Goalkeeper (GK)"
              />
            </div>
            <div className="col-span-1">
              <Position
                image="/how-to-play/en/images/build-the-team/mf.svg"
                title="Midfield (MF)"
              />
            </div>
            <div className="col-span-1">
              <Position
                image="/how-to-play/en/images/build-the-team/df.svg"
                title="Defender (DF)"
              />
            </div>
            <div className="col-span-1">
              <Position
                image="/how-to-play/en/images/build-the-team/fw.svg"
                title="Forward (FW)"
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="w-1/2 md:w-full mx-auto">
                <Position
                  image="/how-to-play/en/images/build-the-team/random.svg"
                  title={
                    <>
                      <div>Random position</div>
                      <div>(DF, MF, FW)</div>
                    </>
                  }
                />
              </div>
            </div>
          </div>
        </article>
      </Container>
    </Section>
  );
};

export default BuildTheTeam;
