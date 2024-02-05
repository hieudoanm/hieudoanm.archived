import Container from '../../atoms/Container';
import Header from '../../atoms/Header';
import Section from '../../atoms/Section';
import StyledSprite from '../../atoms/Sprite';
import NextBackButtons from '../../molecules/BackNextButtons';

const DownloadAndSetup: React.FC = () => {
  return (
    <Section id="download-setup">
      <Container>
        <article>
          <header className="pb-8">
            <Header>Download & Setup</Header>
          </header>
        </article>
        <div className="w-full md:w-1/2 mx-auto">
          <div className="border border-black rounded-2xl p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="col-span-1">
                <div className="mb-8">
                  <h3 className="text-center underline text-2xl font-abel">
                    Extension
                  </h3>
                </div>
                <div className="text-xl">
                  <div className="mb-8">
                    <div className="border border-black rounded-2xl px-4 py-2">
                      <div className="flex items-center gap-4">
                        <StyledSprite
                          className="w-12 h-12 bg-contain bg-center bg-no-repeat"
                          image="https://raw.githubusercontent.com/hieudoanm/cdn/master/images/football-battle/svg/download/v2/chrome.svg"
                        />
                        <span className="text-[#0A6440]">Chrome</span>
                      </div>
                    </div>
                  </div>
                  <div className="mb-8">
                    <div className="border border-black rounded-2xl px-4 py-2">
                      <div className="flex items-center gap-4">
                        <StyledSprite
                          className="w-12 h-12 bg-contain bg-center bg-no-repeat"
                          image="https://raw.githubusercontent.com/hieudoanm/cdn/master/images/football-battle/svg/download/v2/firefox.svg"
                        />
                        <span className="text-[#0A6440]">Firefox</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="mb-8">
                  <h3 className="text-center underline text-2xl font-abel">
                    Mobile App
                  </h3>
                </div>
                <div className="text-xl">
                  <div className="mb-8">
                    <div className="border border-black rounded-2xl px-4 py-2">
                      <div className="flex items-center gap-4">
                        <StyledSprite
                          className="w-12 h-12 bg-contain bg-center bg-no-repeat"
                          image="https://raw.githubusercontent.com/hieudoanm/cdn/master/images/football-battle/svg/download/v2/apple-store.svg"
                        />
                        <span className="text-[#0A6440]">App Store</span>
                      </div>
                    </div>
                  </div>
                  <div className="mb-8">
                    <div className="border border-black rounded-2xl px-4 py-2">
                      <div className="flex items-center gap-4">
                        <StyledSprite
                          className="w-12 h-12 bg-contain bg-center bg-no-repeat"
                          image="https://raw.githubusercontent.com/hieudoanm/cdn/master/images/football-battle/svg/download/v2/google-play.svg"
                        />
                        <span className="text-[#0A6440]">Google Play</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <span className="underline text-[#0A6440]">Video Tutorial</span>
            </div>
          </div>
        </div>
        <NextBackButtons />
      </Container>
    </Section>
  );
};

export default DownloadAndSetup;
