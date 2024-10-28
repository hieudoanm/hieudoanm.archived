import Container from '../../atoms/Container';

const GetInTheField: React.FC = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-1" />
        <div className="col-span-1 md:col-span-2">
          <h2>Collect</h2>
          <p className="capitalize">
            Scout, collect and trade player cards with other collectors in our
            open marketplace. Upgrade them with lessons & skills to match your
            playstyle
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-1" />
        <div className="col-span-1 md:col-span-2">
          <h2>Build</h2>
          <p className="capitalize">
            Create teams with cards from your collection, choose 1 from a
            variety of formations to build your dream team.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-1" />
        <div className="col-span-1 md:col-span-2">
          <h2>Battle</h2>
          <p className="capitalize">
            Put everything you have build to the test. Bring your team to battle
            in different game modes.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default GetInTheField;
