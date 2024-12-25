import { AppLayout } from '@web/layout/AppLayout';
import { NextPage } from 'next';

export const NFCPage: NextPage = () => {
  if (typeof NDEFReader === 'undefined') {
    return (
      <AppLayout full nav>
        <div className='flex h-full items-center justify-center'>
          <div className='text-center text-xl uppercase'>
            Service is Unavailable
          </div>
        </div>
      </AppLayout>
    );
  }

  return <AppLayout nav></AppLayout>;
};

export default NFCPage;
