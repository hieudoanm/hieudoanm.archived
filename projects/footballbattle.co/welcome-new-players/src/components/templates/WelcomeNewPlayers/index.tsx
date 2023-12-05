import FootballPlayer from '../../organisms/FootballPlayer';
import Hero from '../../organisms/Hero';
import HowToPlay from '../../organisms/HowToPlay';
import IntenseBattles from '../../organisms/IntenseBattles';
import JoinCommunity from '../../organisms/JoinCommunity';
import Navbar from '../../organisms/Navbar';

const WelcomeNewPlayers: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FootballPlayer />
      <HowToPlay />
      <IntenseBattles />
      <JoinCommunity />
    </>
  );
};

export default WelcomeNewPlayers;
