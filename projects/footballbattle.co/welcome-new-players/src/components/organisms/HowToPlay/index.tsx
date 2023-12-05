import Container from '../../atoms/Container';
import Sprite from '../../atoms/Sprite';
import Banner from '../../molecules/Banner';

const HowToPlay: React.FC = () => {
  return (
    <>
      <Banner
        image="https://raw.githubusercontent.com/hieudoanm/cdn/master/images/football-battle/svg/welcome/banner/banner-02.svg"
        paddingBottom="25%"
      />
      <Container>
        <div className="w-1/2 mx-auto text-center">
          <p className="capitalize">
            Football Battle is a turn-based card game where you will build a
            team to compete against other collector.
          </p>
          <p className="capitalize">
            There are 2 different modes: PVE and PVP. Whether You&apos;ll face
            other collectors or Non-controlled opponents depending on which
            gameplay mode you&apos;re playing, The basic game mechanics are the
            same.
          </p>
          <p className="capitalize">
            Let&apos;s dive into the key parts of football battles.
          </p>
        </div>
        <div className="w-2/3 mx-auto">
          <Sprite
            image="https://raw.githubusercontent.com/hieudoanm/cdn/master/images/football-battle/svg/welcome/how-to-play/how-to-play-01.svg"
            style={{ paddingBottom: '50%' }}
            className="bg-cover bg-center"
          />
        </div>
        <div className="w-1/2 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="col-span-1"></div>
            <div className="col-span-1 md:col-span-4">
              <h2>Players / Formation</h2>
              <p>
                You can get players for your formation on the Marketplace.
                Players can be trained to increase stats and can be traded with
                other collectors
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="col-span-1"></div>
            <div className="col-span-1 md:col-span-4">
              <h2>Power</h2>
              <p>
                Power accumulate by passing the ball. How many point increase
                depends on the Pass stat of a player. Shooting will unleash all
                those power point plus the shot stat of that player
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="col-span-1"></div>
            <div className="col-span-1 md:col-span-4">
              <h2>Turn</h2>
              <p>
                Once you have the ball, you can freely pass the ball around.
                Your turn end when you shoot the ball.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="col-span-1"></div>
            <div className="col-span-1 md:col-span-4">
              <h2>Stamina</h2>
              <p>
                Stamina is used when your player passing, kicking or defending.
                If a player&apos;s stamina drop to 0, he/she will be eliminated
                from the match.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="col-span-1"></div>
            <div className="col-span-1 md:col-span-4">
              <h2>Goal</h2>
              <p>
                Kick the ball pass the goal line to score a goal. A team win
                when it reach 2 goals first.
              </p>
            </div>
          </div>
        </div>
        <div className="w-2/3 mx-auto">
          <Sprite
            image="https://raw.githubusercontent.com/hieudoanm/cdn/master/images/football-battle/svg/welcome/how-to-play/how-to-play-02.svg"
            style={{ paddingBottom: '50%' }}
            className="bg-cover bg-center"
          />
        </div>
      </Container>
    </>
  );
};

export default HowToPlay;
