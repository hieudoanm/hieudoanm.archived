import { AppLayout } from '@web/layout/AppLayout';
import { Flipism } from '@web/router/apps/games/Flipism';
import { NextPage } from 'next';

const FlipismPage: NextPage = () => {
  return (
    <AppLayout nav full>
      <div className='container mx-auto h-full'>
        <div className='h-full p-4 md:p-8'>
          <div className='flex h-full w-full items-center justify-center'>
            <Flipism />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default FlipismPage;
