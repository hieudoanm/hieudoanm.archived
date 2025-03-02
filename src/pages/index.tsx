import { NextPage } from 'next';
import Link from 'next/link';
import {
  FaAppStore,
  FaInstagram,
  FaLinkedin,
  FaRobot,
  FaSquareGithub,
  FaSquareTwitter,
} from 'react-icons/fa6';

const HomePage: NextPage = () => {
  return (
    <div className='h-screen w-screen bg-gray-100 p-8'>
      <div className='flex h-full flex-col items-center justify-center gap-y-8 text-black'>
        <p className='text-xl font-black tracking-wide uppercase'>Hieu Doan</p>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          <div className='col-span-1'>
            <div className='flex flex-col gap-y-4'>
              <p className='text-center text-lg font-black tracking-wide uppercase'>
                Apps
              </p>
              <div className='flex flex-col items-center justify-center gap-y-2'>
                {[
                  {
                    id: 'broca',
                    href: 'https://hieudoanm.github.io/broca',
                    name: 'broca',
                    icon: <FaRobot />,
                  },
                  {
                    id: 'nothing',
                    href: 'https://hieudoanm.github.io/nothing',
                    name: 'nothing',
                    icon: <FaAppStore />,
                  },
                  {
                    id: 'instagram',
                    href: 'https://hieudoanm.github.io/instagram',
                    name: 'instagram',
                    icon: <FaInstagram />,
                  },
                ].map(({ id, href, name, icon }) => {
                  return (
                    <div
                      key={id}
                      className='flex items-center gap-x-1 border-b border-dotted'>
                      {icon}
                      <Link
                        href={href}
                        target='_blank'
                        className='tracking-wide lowercase'>
                        {name}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className='col-span-1'>
            <div className='flex flex-col gap-y-4'>
              <p className='text-center text-lg font-black tracking-wide uppercase'>
                Profile
              </p>
              <div className='flex flex-col items-center justify-center gap-y-2'>
                {[
                  {
                    id: 'github',
                    href: 'https://github.com/hieudoanm',
                    name: 'GitHub',
                    icon: <FaSquareGithub />,
                  },
                  {
                    id: 'twitter',
                    href: 'https://x.com/hieudoanm',
                    name: 'Twitter',
                    icon: <FaSquareTwitter />,
                  },
                  {
                    id: 'linkedin',
                    href: 'https://www.linkedin.com/in/hieudoanm',
                    name: 'LinkedIn',
                    icon: <FaLinkedin />,
                  },
                ].map(({ id, href, name, icon }) => {
                  return (
                    <div
                      key={id}
                      className='flex items-center gap-x-1 border-b border-dotted'>
                      {icon}
                      <Link
                        href={href}
                        target='_blank'
                        className='tracking-wide lowercase'>
                        {name}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const dynamic = 'force-static';

export default HomePage;
