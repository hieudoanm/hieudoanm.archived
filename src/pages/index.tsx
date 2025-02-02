import { NextPage } from 'next';
import Link from 'next/link';
import {
  FaAppStore,
  FaLinkedin,
  FaSquareGithub,
  FaSquareTwitter,
} from 'react-icons/fa6';

const HomePage: NextPage = () => {
  return (
    <div className='h-screen w-screen bg-gray-100 p-8'>
      <div className='flex h-full flex-col items-center justify-center gap-y-8 text-black'>
        <p className='text-2xl font-black tracking-wide uppercase'>Hieu Doan</p>
        <div className='flex flex-col items-center justify-center gap-y-4'>
          {[
            {
              id: 'apps',
              href: 'https://hieudoanm.github.io/nothing',
              name: 'Apps',
              icon: <FaAppStore />,
            },
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
                className='flex items-center gap-x-1 border-b border-dotted text-xl'>
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
  );
};

export const dynamic = 'force-static';

export default HomePage;
