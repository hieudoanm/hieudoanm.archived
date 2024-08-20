import { Layout } from '@web/layout';
import MarkdownNote from '@web/markdown/awesome-devops.mdx';
import { NextPage } from 'next';

const NotePage: NextPage = () => {
  return (
    <Layout nav full>
      <div className='min-h-screen'>
        <div className='container mx-auto'>
          <div className='p-4 md:p-8'>
            <div className='markdown-body !bg-base-100'>
              <MarkdownNote />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const dynamic = 'force-static';

export default NotePage;
