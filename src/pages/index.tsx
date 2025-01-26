import { NextPage } from 'next';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

const HomePage: NextPage = () => {
  return (
    <div className='h-screen w-screen bg-gray-100 p-8'>
      <div className='flex h-full flex-col items-center justify-center gap-y-4'>
        <p className='text-xl text-black lowercase'>
          <Link
            href='/nothing'
            target='_blank'
            className='font-black uppercase underline decoration-dotted underline-offset-6'>
            Hieu Doan
          </Link>
        </p>
        <div className='flex items-center gap-x-1 text-xl text-black lowercase'>
          <FaGithub />
          <Link
            href='https://github.com/hieudoanm'
            target='_blank'
            className='underline decoration-dotted underline-offset-6'>
            github
          </Link>
        </div>
        <div className='flex items-center gap-x-1 text-xl text-black lowercase'>
          <FaLinkedin />
          <Link
            href='https://www.linkedin.com/in/hieudoanm'
            target='_blank'
            className='underline decoration-dotted underline-offset-6'>
            linkedin
          </Link>
        </div>
        <div className='flex items-center gap-x-1 text-xl text-black lowercase'>
          <FaXTwitter />
          <Link
            href='https://x.com/hieudoanm'
            target='_blank'
            className='underline decoration-dotted underline-offset-6'>
            x (twitter)
          </Link>
        </div>
      </div>
    </div>
  );
};

export const dynamic = 'force-static';

export default HomePage;
