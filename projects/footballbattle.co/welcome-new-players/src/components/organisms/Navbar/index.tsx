import Container from '../../atoms/Container';
import StyledSprite from '../../atoms/Sprite';

const Navbar: React.FC = () => {
  return (
    <nav className="border-[#45C35B] border-b py-4">
      <Container>
        <div className="flex justify-between items-center">
          <StyledSprite
            title="Football Battle"
            className="w-36 h-12 bg-cover bg-center"
            image="https://raw.githubusercontent.com/hieudoanm/cdn/master/images/football-battle/svg/navbar/football-battle.svg"
          />
          <div className="flex items-center gap-4 md:gap-8">
            <div className="font-abel text-xl">Welcome</div>
            <div>|</div>
            <div className="font-abel text-xl">Community</div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
