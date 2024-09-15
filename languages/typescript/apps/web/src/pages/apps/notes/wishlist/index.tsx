import { AppLayout } from '@web/layout/AppLayout';
import MarkdownNote from '@web/markdown/wishlist.mdx';
import { NextPage } from 'next';

const NotePage: NextPage = () => {
  return (
    <AppLayout nav full>
      <div className='min-h-screen'>
        <div className='container mx-auto'>
          <div className='p-4 md:p-8'>
            <div className='markdown-body !bg-base-100'>
              <MarkdownNote />
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export const dynamic = 'force-static';

export default NotePage;
