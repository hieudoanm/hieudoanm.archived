import Container from '../../atoms/Container';

const GameModes: React.FC = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="col-span-1">
          <div className="w-2/3 mx-auto">
            <p className="text-center capitalize">
              strengthen your skill or test new strategies against
              computer-controlled teams
            </p>
          </div>
        </div>
        <div className="col-span-1">
          <div className="w-2/3 mx-auto">
            <p className="text-center capitalize">
              Users fight to reach the top of the ladder. Feel the heat of the
              battle in this PvP mode
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default GameModes;
