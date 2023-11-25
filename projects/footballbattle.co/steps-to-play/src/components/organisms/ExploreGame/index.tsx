import Container from '../../atoms/Container';
import Section from '../../atoms/Section';
import StyledSprite from '../../atoms/Sprite';
import NextBackButtons from '../../molecules/BackNextButtons';

const ExploreGame: React.FC = () => {
  return (
    <Section id="explore-game">
      <Container>
        <article>
          <div className="grid grid-cols-3 gap-8 items-center">
            <div className="col-span-1">
              <div className="font-abel text-center underline py-4 rounded-xl bg-[#81E279] border border-black">
                Marketplace
              </div>
            </div>
            <div className="col-span-1">
              <div>
                <StyledSprite
                  className="bg-cover w-full"
                  style={{ paddingBottom: '230%' }}
                  image="https://raw.githubusercontent.com/hieudoanm/cdn/master/images/football-battle/svg/explore-our-game/player.svg"
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className="font-abel text-center underline py-4 rounded-xl bg-[#81E279] border border-black">
                How To Play
              </div>
            </div>
          </div>
        </article>
        <NextBackButtons />
      </Container>
    </Section>
  );
};

export default ExploreGame;
