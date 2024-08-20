import Bored from '@web/markdown/bored.mdx';
import { NextPage } from 'next';

const NotePage: NextPage = () => {
  return (
    <div className='min-h-screen'>
      <div className='container mx-auto'>
        <div className='p-4 md:p-8'>
          <div className='markdown-body !bg-base-100'>
            <Bored />
          </div>
        </div>
      </div>
    </div>
  );
};

export const dynamic = 'force-static';

export default NotePage;
