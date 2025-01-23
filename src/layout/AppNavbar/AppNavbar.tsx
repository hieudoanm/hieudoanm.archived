import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { FaAppStore, FaAngleLeft } from 'react-icons/fa6';

export type AppNavbarProps = { border?: boolean };

export const AppNavbar: FC<AppNavbarProps> = ({ border = false }) => {
  const router = useRouter();
  const { asPath } = router;

  const borderBottom: string = border ? 'border-b border-base-content' : '';
  const paddingBottom: string = border ? 'pb-4 md:pb-8' : 'pb-0 md:pb-0';
  const inApp: boolean =
    asPath.split('/').filter((path: string) => path !== '').length > 1;

  return (
    <nav>
      <div className={borderBottom}>
        <div className='container mx-auto'>
          <div className={`px-4 pt-4 md:px-8 md:pt-8 ${paddingBottom}`}>
            <div className='flex items-center justify-between'>
              {inApp ? (
                <button
                  type='button'
                  onClick={() => router.back()}
                  className='btn btn-ghost text-xl'>
                  <span className='text-xl'>
                    <FaAngleLeft size={24} />
                  </span>
                </button>
              ) : (
                <Link href='/apps'>
                  <button type='button' className='btn btn-ghost text-xl'>
                    <FaAppStore size={24} className='hover:animate-spin' />
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
