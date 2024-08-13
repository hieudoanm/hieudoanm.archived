import { Layout } from '@web/layout';
import { ChessInsights } from '@web/router/apps/chess/insights/ChessInsights';
import { QueryTemplate } from '@web/templates/QueryTemplate';
import { trpc } from '@web/utils/trpc';
import { GetStaticPaths, GetStaticPropsContext, NextPage } from 'next';
import { FC } from 'react';

const InsightsQuery: FC<{ username: string }> = ({ username }) => {
  const { isPending, error, data } = trpc.chess.insights.useQuery({
    username: username,
    timeClass: 'blitz',
    variant: 'chess',
  });

  return (
    <QueryTemplate isPending={isPending} error={error} noData={!data}>
      <Layout full nav>
        <div className='container mx-auto'>
          <div className='p-4 md:p-8'>
            <ChessInsights
              username={data?.username}
              avatar={data?.avatar}
              title={data?.title}
              name={data?.name}
              insights={data}
            />
          </div>
        </div>
      </Layout>
    </QueryTemplate>
  );
};

const InsightsPage: NextPage<{ username: string }> = ({ username }) => {
  return <InsightsQuery username={username}></InsightsQuery>;
};

export const getStaticPaths = (async () => {
  const usernames: string[] = [
    'anishgiri',
    'chefshouse',
    'fabianocaruana',
    'gmwso',
    'hikaru',
    'lachesisq',
    'levonaronian',
    'liemle',
    'lyonbeast',
    'magnuscarlsen',
    'thevish',
    'vincentkeymer',
    'wonderfultime',
  ];
  const paths = usernames.map((username) => ({
    params: { username },
  }));
  return { paths, fallback: true };
}) satisfies GetStaticPaths;

export const getStaticProps = async (
  context: GetStaticPropsContext<{ username: string }>
) => {
  const { params } = context;
  const username: string = (params ?? { username: '' }).username ?? '';
  return { props: { username } };
};

export const dynamic = 'force-static';

export default InsightsPage;
