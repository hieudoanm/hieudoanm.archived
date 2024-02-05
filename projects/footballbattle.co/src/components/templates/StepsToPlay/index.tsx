import BuildTheTeam from '../../organisms/BuildTheTeam';
import DownloadAndSetup from '../../organisms/DownloadAndSetup';
import ExploreGame from '../../organisms/ExploreGame';
import Footer from '../../organisms/Footer';
import GetPlayers from '../../organisms/GetPlayers';
import JoinOurCommunity from '../../organisms/JoinOurCommunity';
import Navbar from '../../organisms/Navbar';
import StakeToPlay from '../../organisms/StakeToPlay';
import Steps from '../../organisms/Steps';

export const StepsToPlay: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Steps />
      <DownloadAndSetup />
      <StakeToPlay />
      <GetPlayers />
      <BuildTheTeam />
      <ExploreGame />
      <JoinOurCommunity />
      <Footer />
    </div>
  );
};
