import Container from '../../atoms/Container';

const Circle: React.FC<{ background?: string; children: string }> = ({
  background = '',
  children
}) => {
  return (
    <div className="w-12 h-12 border border-black rounded-full p-1">
      <div className="w-full h-full flex items-center">
        <div className={`w-full h-full rounded-full ${background}`}>
          <div className="w-full h-full flex items-center justify-center">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

const Step: React.FC<{
  background?: string;
  step: number;
  children: string;
}> = ({ background = '', step, children }) => {
  return (
    <div>
      <div className="relative">
        <Circle background={background}>{step.toString()}</Circle>
        <div className="absolute w-12 top-16 left-0 right-0 mx-auto text-center">
          <p className="font-abel text-sm">{children}</p>
        </div>
      </div>
    </div>
  );
};

const Line: React.FC = () => {
  return (
    <div>
      <div className="w-12 h-12">
        <div className="flex items-center h-full">
          <div className="w-full h-px bg-black"></div>
        </div>
      </div>
    </div>
  );
};

const Steps: React.FC = () => {
  return (
    <div className="py-16">
      <Container>
        <div className="flex justify-center items-start gap-4">
          <Step background={'bg-[#45C35B]'} step={1}>
            Create MetaMask wallet
          </Step>
          <Line />
          <Step step={2}>Stake Now</Step>
          <Line />
          <Step step={3}>Get Your Players</Step>
          <Line />
          <Step step={4}>Build Your Dream Team</Step>
          <Line />
          <Step step={5}>Explore Our Game</Step>
        </div>
      </Container>
    </div>
  );
};

export default Steps;
