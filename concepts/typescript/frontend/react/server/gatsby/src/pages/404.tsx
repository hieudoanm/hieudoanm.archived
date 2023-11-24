import { HeadFC, PageProps } from 'gatsby';
import * as React from 'react';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center gap-4">
      <h1 className="text-9xl font-bold">404</h1>
      <p className="text-3xl uppercase">Page Not Found</p>
    </main>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Gatsby Template - Not found</title>;
