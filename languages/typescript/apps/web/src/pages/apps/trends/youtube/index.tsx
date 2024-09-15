import { useIsOnline } from '@web/hooks/use-is-online';
import { AppLayout } from '@web/layout/AppLayout';
import { NextPage } from 'next';

export const YouTubePage: NextPage = () => {
  const isOnline: boolean = useIsOnline();

  if (!isOnline) {
    return (
      <AppLayout full nav>
        <div className='flex h-full items-center justify-center'>
          <div className='text-center text-xl uppercase'>
            Service is Offline
          </div>
        </div>
      </AppLayout>
    );
  }

  return <AppLayout nav></AppLayout>;
};

export default YouTubePage;
