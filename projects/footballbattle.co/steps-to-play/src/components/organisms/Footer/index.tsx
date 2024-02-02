import styled from 'styled-components';
import Container from '../../atoms/Container';
import Sprite from '../../atoms/Sprite';

const StyledFooter = styled.footer`
  background-position-y: 95%;
  background-image: url(https://raw.githubusercontent.com/hieudoanm/cdn/master/images/football-battle/svg/footer/background.svg);
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter className="py-32 bg-cover bg-center bg-gray-900 bg-no-repeat bg-cover bg-bottom-y">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Sprite
              image="https://raw.githubusercontent.com/hieudoanm/cdn/master/images/football-battle/svg/footer/football-battle.svg"
              className="w-48 h-28 bg-contain bg-center bg-no-repeat"
            />
          </div>
          <div className="col-span-1">
            <p className="uppercase text-white mb-4 text-sm font-ps2">
              <a href="https://bit.ly/3NTOEJH" target="_blank" rel="noreferrer">
                Games
              </a>
            </p>
            <p className="uppercase text-white mb-4 text-sm font-ps2">
              <a href="https://bit.ly/3yMv4La" target="_blank" rel="noreferrer">
                Marketplace
              </a>
            </p>
            <p className="uppercase text-white mb-4 text-sm font-ps2">
              <a href="https://bit.ly/3akT9PT" target="_blank" rel="noreferrer">
                About
              </a>
            </p>
            <p className="uppercase text-white mb-4 text-sm font-ps2">
              <a href="https://bit.ly/3ArxJvc" target="_blank" rel="noreferrer">
                Contact
              </a>
            </p>
          </div>
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <p className="text-yellow uppercase ">Join Our Channel</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <div>
                <Sprite
                  image="https://raw.githubusercontent.com/hieudoanm/cdn/master/images/football-battle/svg/footer/icon.svg"
                  className="w-12 h-12 bg-cover bg-no-repeat">
                  <div className="flex items-center justify-center w-full h-full">
                    <a
                      href="https://www.facebook.com/footballbattle.co"
                      target="_blank"
                      rel="noreferrer">
                      <Sprite
                        image="https://raw.githubusercontent.com/hieudoanm/cdn/master/images/football-battle/svg/footer/facebook.svg"
                        className="w-6 h-6 bg-contain bg-center bg-no-repeat"
                      />
                    </a>
                  </div>
                </Sprite>
              </div>
              <div>
                <Sprite
                  image="https://raw.githubusercontent.com/hieudoanm/cdn/master/images/football-battle/svg/footer/icon.svg"
                  className="w-12 h-12 bg-cover bg-no-repeat">
                  <div className="flex items-center justify-center w-full h-full">
                    <a
                      href="https://www.instagram.com/footballbattle.co/"
                      target="_blank"
                      rel="noreferrer">
                      <Sprite
                        image="https://raw.githubusercontent.com/hieudoanm/cdn/master/images/football-battle/svg/footer/instagram.svg"
                        className="w-6 h-6 bg-contain bg-center bg-no-repeat"
                      />
                    </a>
                  </div>
                </Sprite>
              </div>
              <div>
                <Sprite
                  image="https://raw.githubusercontent.com/hieudoanm/cdn/master/images/football-battle/svg/footer/icon.svg"
                  className="w-12 h-12 bg-cover bg-no-repeat">
                  <div className="flex items-center justify-center w-full h-full">
                    <a
                      href="https://twitter.com/fbbattleco"
                      target="_blank"
                      rel="noreferrer">
                      <Sprite
                        image="https://raw.githubusercontent.com/hieudoanm/cdn/master/images/football-battle/svg/footer/twitter.svg"
                        className="w-6 h-6 bg-contain bg-center bg-no-repeat"
                      />
                    </a>
                  </div>
                </Sprite>
              </div>
              <div>
                <Sprite
                  image="https://raw.githubusercontent.com/hieudoanm/cdn/master/images/football-battle/svg/footer/icon.svg"
                  className="w-12 h-12 bg-cover bg-no-repeat">
                  <div className="flex items-center justify-center w-full h-full">
                    <a
                      href="https://t.me/footballbattleNFT"
                      target="_blank"
                      rel="noreferrer">
                      <Sprite
                        image="https://raw.githubusercontent.com/hieudoanm/cdn/master/images/football-battle/svg/footer/telegram.svg"
                        className="w-6 h-6 bg-contain bg-center bg-no-repeat"
                      />
                    </a>
                  </div>
                </Sprite>
              </div>
              <div>
                <Sprite
                  image="https://raw.githubusercontent.com/hieudoanm/cdn/master/images/football-battle/svg/footer/icon.svg"
                  className="w-12 h-12 bg-cover bg-no-repeat">
                  <div className="flex items-center justify-center w-full h-full">
                    <a
                      href="https://discord.com/invite/vqymVPcFSs"
                      target="_blank"
                      rel="noreferrer">
                      <Sprite
                        image="https://raw.githubusercontent.com/hieudoanm/cdn/master/images/football-battle/svg/footer/discord.svg"
                        className="w-6 h-6 bg-contain bg-center bg-no-repeat"
                      />
                    </a>
                  </div>
                </Sprite>
              </div>
              <div>
                <Sprite
                  image="https://raw.githubusercontent.com/hieudoanm/cdn/master/images/football-battle/svg/footer/icon.svg"
                  className="w-12 h-12 bg-cover bg-no-repeat">
                  <div className="flex items-center justify-center w-full h-full">
                    <a
                      href="https://www.tiktok.com/@crowdhero.co"
                      target="_blank"
                      rel="noreferrer">
                      <Sprite
                        image="https://raw.githubusercontent.com/hieudoanm/cdn/master/images/football-battle/svg/footer/tiktok.svg"
                        className="w-6 h-6 bg-contain bg-center bg-no-repeat"
                      />
                    </a>
                  </div>
                </Sprite>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
