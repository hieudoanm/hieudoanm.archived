import { Wheel } from '@web/components/Wheel';
import { AppLayout } from '@web/layout/AppLayout';
import { NextPage } from 'next';

const WheelOfFortunePage: NextPage = () => {
  return (
    <AppLayout nav full>
      <div className='container mx-auto h-full'>
        <div className='h-full p-4 md:p-8'>
          <div className='flex h-full w-full items-center justify-center'>
            <Wheel />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default WheelOfFortunePage;
