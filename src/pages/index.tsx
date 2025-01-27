import { NextPage } from 'next';
import Link from 'next/link';
import { FaLinkedin, FaSquareTwitter, FaSquareGithub } from 'react-icons/fa6';

const HomePage: NextPage = () => {
  return (
    <div className='h-screen w-screen bg-gray-100 p-8'>
      <div className='flex h-full flex-col items-center justify-center gap-y-8 text-black'>
        <p>
          <Link
            href='/nothing'
            target='_blank'
            className='text-2xl font-black tracking-wide uppercase underline decoration-dotted underline-offset-6'>
            Hieu Doan
          </Link>
        </p>
        <div className='flex flex-col items-center justify-center gap-y-4'>
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
