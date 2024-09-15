import { TRPCClientErrorLike } from '@trpc/client';
import { AppLayout } from '@web/layout/AppLayout';
import { FC, ReactNode } from 'react';

export type QueryTemplateProps = {
  children?: ReactNode;
  isPending: boolean;
  noData: boolean;
  error: TRPCClientErrorLike<any> | null;
};

export const QueryTemplate: FC<QueryTemplateProps> = ({
  children = <></>,
  isPending = false,
  noData = false,
  error = null,
}) => {
  if (isPending) {
    return (
      <AppLayout full nav>
        <div className='container mx-auto h-full'>
          <div className='h-full p-4 md:p-8'>
            <div className='flex h-full items-center justify-center'>
              <span className='loading loading-infinity loading-lg'></span>
            </div>
          </div>
        </div>
      </AppLayout>
    );
  }

  if (error) {
    return (
      <AppLayout full nav>
        <div className='container mx-auto h-full'>
          <div className='h-full p-4 md:p-8'>
            <div className='flex h-full items-center justify-center'>
              <div className='text-center text-xl uppercase'>
                {error?.message ?? 'Error'}
              </div>
            </div>
          </div>
        </div>
      </AppLayout>
    );
  }

  if (noData) {
    return (
      <AppLayout full nav>
        <div className='container mx-auto h-full'>
          <div className='h-full p-4 md:p-8'>
            <div className='flex h-full items-center justify-center'>
              <div className='text-center text-xl uppercase'>No Data</div>
            </div>
          </div>
        </div>
      </AppLayout>
    );
  }

  return <>{children}</>;
};
