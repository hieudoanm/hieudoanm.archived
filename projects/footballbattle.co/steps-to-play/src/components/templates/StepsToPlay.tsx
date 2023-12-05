import BuildTeam from '../organisms/BuildTeam';
import DownloadAndSetup from '../organisms/DownloadAndSetup';
import ExploreGame from '../organisms/ExploreGame';
import Footer from '../organisms/Footer';
import GetPlayers from '../organisms/GetPlayers';
import JoinCommunity from '../organisms/JoinCommunity';
import Navbar from '../organisms/Navbar';
import StakeToPlay from '../organisms/StakeToPlay';
import Steps from '../organisms/Steps';

const StepsToPlay: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Steps />
      <DownloadAndSetup />
      <StakeToPlay />
      <GetPlayers />
      <BuildTeam />
      <ExploreGame />
      <JoinCommunity />
      <Footer />
    </div>
  );
};

export default StepsToPlay;
