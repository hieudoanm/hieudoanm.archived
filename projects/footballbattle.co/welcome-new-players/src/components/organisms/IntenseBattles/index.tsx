import Header from '../../atoms/Header';
import Banner from '../../molecules/Banner';
import GameModes from '../../molecules/GameModes';
import GetInTheField from '../../molecules/GetInTheField';

const IntenseBattles: React.FC = () => {
  return (
    <>
      <Banner
        image="https://raw.githubusercontent.com/hieudoanm/cdn/master/images/football-battle/svg/welcome/banner/banner-03.svg"
        paddingBottom="25%"
      />
      <Header>Game Modes</Header>
      <GameModes />
      <Header>Get In The Field</Header>
      <GetInTheField />
    </>
  );
};

export default IntenseBattles;
