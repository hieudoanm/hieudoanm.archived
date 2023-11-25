import Container from '../../atoms/Container';
import Header from '../../atoms/Header';
import Section from '../../atoms/Section';
import StyledSprite from '../../atoms/Sprite';
import Subheader from '../../atoms/Subheader';

const GetPlayers: React.FC = () => {
  return (
    <Section id="get-players">
      <Container>
        <article>
          <header className="pb-8">
            <div className="mb-4">
              <Header>Get 5 Players To Starting Game</Header>
            </div>
            <Subheader>There are two ways to get NFTs</Subheader>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1">
              <div className="border border-black rounded-xl p-4">
                <div className="mb-4 text-[#0A6440]">
                  <h2 className="text-center text-2xl underline mb-2 font-extrabold">
                    Beginner Box
                  </h2>
                  <p className="text-center">
                    Beginner Box has everything you need to play the game
                  </p>
                </div>
                <div className="mb-4">
                  <div style={{ paddingBottom: '110%' }} className="relative">
                    <div className="absolute top-0 bottom-0 left-0 right-0">
                      <div className="h-full flex items-center">
                        <StyledSprite
                          image="https://raw.githubusercontent.com/hieudoanm/cdn/master/images/football-battle/svg/nft/v2/beginner-box.svg"
                          style={{ paddingBottom: '80%' }}
                          className="w-full bg-cover bg-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="py-2 w-full rounded-2xl text-2xl border border-[#0A6440] text-[#0A6440] font-bold"
                >
                  Buy Now
                </button>
              </div>
            </div>
            <div className="col-span-1">
              <div className="border border-black rounded-xl p-4">
                <div className="mb-4 text-[#0A6440]">
                  <h2 className="text-center text-2xl underline mb-2 font-extrabold">
                    Buy Player
                  </h2>
                  <p className="text-center">
                    Desposit Token on MetaMask and buy card from the Marketplace
                  </p>
                </div>
                <div className="mb-4">
                  <StyledSprite
                    image="https://raw.githubusercontent.com/hieudoanm/cdn/master/images/football-battle/svg/nft/v2/buy-player.svg"
                    style={{ paddingBottom: '110%' }}
                    className="w-full bg-cover bg-center"
                  />
                </div>
                <button
                  type="button"
                  className="py-2 w-full rounded-2xl text-2xl border border-[#0A6440] text-[#0A6440] font-bold"
                >
                  Buy Now
                </button>
              </div>
            </div>
            <div className="col-span-1">
              <div className="border border-black rounded-xl p-4">
                <div className="mb-4 text-[#0A6440]">
                  <h2 className="text-center text-2xl underline mb-2 font-extrabold">
                    Rent NFT
                  </h2>
                  <p className="text-center">
                    It is a system where you can rent player without puschasing
                    them
                  </p>
                </div>
                <div className="mb-4">
                  <StyledSprite
                    image="https://raw.githubusercontent.com/hieudoanm/cdn/master/images/football-battle/svg/nft/v2/rent-nft.svg"
                    style={{ paddingBottom: '110%' }}
                    className="w-full bg-cover bg-center"
                  />
                </div>
                <button
                  type="button"
                  className="py-2 w-full rounded-2xl text-2xl border border-[#C20000] text-[#C20000] font-bold"
                >
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
        </article>
      </Container>
    </Section>
  );
};

export default GetPlayers;
