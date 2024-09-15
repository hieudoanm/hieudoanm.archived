import { AppLayout } from '@web/layout/AppLayout';
import { RockPaperScissors } from '@web/router/apps/games/RockPaperScissors';
import { NextPage } from 'next';

const RockPaperScissorsPage: NextPage = () => {
  return (
    <AppLayout nav full>
      <div className='container mx-auto h-full'>
        <div className='h-full p-4 md:p-8'>
          <div className='flex h-full items-center justify-center'>
            <RockPaperScissors />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default RockPaperScissorsPage;
