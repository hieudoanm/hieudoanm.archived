import FootballPlayer from '../../organisms/FootballPlayer';
import Hero from '../../organisms/Hero';
import HowToPlay from '../../organisms/HowToPlay';
import IntenseBattles from '../../organisms/IntenseBattles';
import JoinOurCommunity from '../../organisms/JoinOurCommunity';
import Navbar from '../../organisms/Navbar';

const WelcomeNewPlayers: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FootballPlayer />
      <HowToPlay />
      <IntenseBattles />
      <JoinOurCommunity />
    </>
  );
};

export default WelcomeNewPlayers;
