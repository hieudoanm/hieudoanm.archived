import React from 'react';
import Container from '../../atoms/Container';
import Header from '../../atoms/Header';
import LinearText from '../../atoms/LinearText';
import Section from '../../atoms/Section';
import Sprite from '../../atoms/Sprite';
import CreateAccount from '../../molecules/CreateAccount';
import DownloadAndSetUp from '../../molecules/DownloadAndSetUp';

export const CreateMetaMaskWallet: React.FC = () => {
  return (
    <Section id="create-meta-mask-wallet">
      <Container>
        <div className="mb-16">
          <Header>
            <LinearText>Create</LinearText> <LinearText>MetaMask</LinearText>{' '}
            <LinearText>Wallet</LinearText>
          </Header>
        </div>
        <article>
          <div className="grid grid-cols-1 md:grid-cols-11 gap-8">
            <div className="col-span-1 md:col-span-5">
              <CreateAccount />
            </div>
            <div className="col-span-1">
              <div className="flex justify-center items-center w-full h-full">
                <Sprite
                  image="/how-to-play/en/images/meta-mask-wallet/arrow.svg"
                  className="w-8 h-8 bg-contain bg-center rotate-90 md:rotate-0"
                />
              </div>
            </div>
            <div className="col-span-1 md:col-span-5">
              <DownloadAndSetUp />
            </div>
          </div>
        </article>
      </Container>
    </Section>
  );
};

export default CreateMetaMaskWallet;
