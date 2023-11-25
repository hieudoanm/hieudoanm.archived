import Container from '../../atoms/Container';
import Header from '../../atoms/Header';
import Section from '../../atoms/Section';
import NextBackButtons from '../../molecules/BackNextButtons';
import StakeToPlayInstructions from '../../molecules/StakeToPlayInstructions';
import StakeToPlayVideo from '../../molecules/StakeToPlayVideo';

const StakeToPlay: React.FC = () => {
  return (
    <Section id="stake-to-play">
      <Container>
        <article>
          <div className="grid grid-cols-1 md:grid-cols-7 lg:grid-cols-9 gap-8">
            <div className="order-2 md:order-1 col-span-1 md:col-span-3 lg:col-span-4">
              <div className="mb-16">
                <h1 className="text-xl md:text-3xl font-anton">
                  Stake-to-play Game
                </h1>
              </div>
              <StakeToPlayInstructions />
            </div>
            <div className="order-1 md:order-2 col-span-1 md:col-span-4 lg:col-span-5">
              <StakeToPlayVideo />
            </div>
          </div>
        </article>
        <NextBackButtons></NextBackButtons>
      </Container>
    </Section>
  );
};

export default StakeToPlay;
