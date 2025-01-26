import { GridTemplate } from '@web/router/apps/Apps';
import { GetStaticPaths, GetStaticPropsContext, NextPage } from 'next';

const NewsApps: NextPage<{ country: 'uk' }> = ({ country }) => {
  return <GridTemplate folder={`news-${country}`} />;
};

export const getStaticPaths = (async () => {
  const paths = ['de', 'kr', 'uk', 'us'].map((country: string) => ({
    params: { country },
  }));
  return { paths, fallback: true };
}) satisfies GetStaticPaths;

export const getStaticProps = async (
  context: GetStaticPropsContext<{ country: string }>
) => {
  const { params } = context;
  const country: string = (params ?? { country: '' }).country ?? '';
  return { props: { country } };
};

export default NewsApps;
