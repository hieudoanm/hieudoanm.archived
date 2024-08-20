import notes from '@web/json/notes.json';
import { GetStaticPaths, GetStaticPropsContext, NextPage } from 'next';
import { ElementType, useEffect, useState } from 'react';

type NotePageProps = {
  id: string;
};

const NotePage: NextPage<NotePageProps> = ({ id }: NotePageProps) => {
  const [Component, setComponent] = useState<ElementType | null>(null);

  useEffect(() => {
    const getComponent = async () => {
      const MarkdownComponent = await import(`@web/markdown/${id}.mdx`);
      setComponent(MarkdownComponent);
    };
    getComponent();
  });

  return (
    <div className='min-h-screen'>
      <div className='container mx-auto'>
        <div className='p-4 md:p-8'>
          <div className='markdown-body !bg-base-100'>
            {Component ? <Component /> : <></>}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = (async () => {
  const paths = notes.map((id) => ({ params: { id } }));
  return { paths, fallback: true };
}) satisfies GetStaticPaths;

export const getStaticProps = (
  context: GetStaticPropsContext<{ id: string }>
) => {
  const { params } = context;
  const id: string = (params ?? { id: '' }).id ?? '';
  return { props: { id } };
};

export const dynamic = 'force-static';

export default NotePage;
