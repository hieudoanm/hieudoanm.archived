import Container from '../../atoms/Container';
import Header from '../../atoms/Header';
import Position from '../../atoms/Position';
import Section from '../../atoms/Section';
import StyledSprite from '../../atoms/Sprite';
import NextBackButtons from '../../molecules/BackNextButtons';

const BuildTeam: React.FC = () => {
  return (
    <Section id="build-team">
      <Container>
        <article>
          <header className="pb-8">
            <Header>The Right Lineup To Start Game</Header>
          </header>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            <div className="col-span-1">
              <Position
                image="https://raw.githubusercontent.com/hieudoanm/cdn/master/images/football-battle/svg/build-the-team/v2/gk.svg"
                title="Goalkeeper (GK)"
              />
            </div>
            <div className="col-span-1">
              <Position
                image="https://raw.githubusercontent.com/hieudoanm/cdn/master/images/football-battle/svg/build-the-team/v2/mf.svg"
                title="Midfield (MF)"
              />
            </div>
            <div className="col-span-1">
              <Position
                image="https://raw.githubusercontent.com/hieudoanm/cdn/master/images/football-battle/svg/build-the-team/v2/df.svg"
                title="Defender (DF)"
              />
            </div>
            <div className="col-span-1">
              <Position
                image="https://raw.githubusercontent.com/hieudoanm/cdn/master/images/football-battle/svg/build-the-team/v2/fw.svg"
                title="Forward (FW)"
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="w-1/2 md:w-full mx-auto">
                <div className="border border-black rounded-xl h-full">
                  <div className="py-4 px-4">
                    <div style={{ paddingBottom: '195%' }} className="relative">
                      <div className="absolute top-0 bottom-0 left-0 right-0 mx-auto">
                        <div className="px-2 h-full">
                          <div className="flex items-center h-full">
                            <StyledSprite
                              image="https://raw.githubusercontent.com/hieudoanm/cdn/master/images/football-battle/svg/build-the-team/v2/random.svg"
                              style={{ paddingBottom: '100%' }}
                              className="w-full bg-cover bg-center"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center font-abel mt-4">
                  <div>Random position</div>
                  <div>(DF, MF, FW)</div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <NextBackButtons />
      </Container>
    </Section>
  );
};

export default BuildTeam;
