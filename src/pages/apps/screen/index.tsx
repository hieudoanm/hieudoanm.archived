import { useBrowser } from '@web/hooks/use-browser';
import { useScreenSize } from '@web/hooks/use-screen-size';
import { AppLayout } from '@web/layout/AppLayout';
import { NextPage } from 'next';

const ScreenPage: NextPage = () => {
  const { width, height } = useScreenSize();
  const browser = useBrowser();

  return (
    <AppLayout nav full>
      <div className='container mx-auto h-full'>
        <div className='h-full p-4 md:p-8'>
          <div className='flex h-full items-center justify-center'>
            <div className='border-base-content relative aspect-video w-full rounded-xl border md:w-[50%]'>
              <div className='absolute top-4 right-0 left-0 text-center'>
                {width}
              </div>
              <div className='absolute top-0 bottom-0 left-4 flex items-center'>
                {height}
              </div>
              <div className='flex h-full w-full items-center justify-center'>
                {browser}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export const dynamic = 'force-static';

export default ScreenPage;
