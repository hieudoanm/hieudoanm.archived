import { getTopHeadlines } from '@web/clients/news/news.client';
import { Article } from '@web/clients/news/news.dto';
import { Category, Country } from '@web/clients/news/news.enums';
import { useIsOnline } from '@web/hooks/use-is-online';
import { Layout } from '@web/layout/Layout';
import { Articles, NewsQuery } from '@web/router/apps/news';
import { GetStaticPaths, GetStaticPropsContext, NextPage } from 'next';

type NewsPageProps = {
  articles: Article[];
  category: Category;
  country: Country;
};

const NewsPage: NextPage<NewsPageProps> = ({
  articles: defaultArticles = [],
  category,
  country,
}) => {
  const isOnline: boolean = useIsOnline();

  if (!isOnline) {
    return (
      <Layout full nav navBorder>
        <Articles articles={defaultArticles} />
      </Layout>
    );
  }

  return <NewsQuery category={category} country={country} />;
};

export const getStaticPaths = (async () => {
  const countries = ['de', 'kr', 'uk', 'us'];
  const categories = [
    'business',
    'entertainment',
    'health',
    'science',
    'sports',
    'technology',
  ];
  const paths: { params: { category: string; country: string } }[] = [];
  for (const country of countries) {
    for (const category of categories) {
      paths.push({ params: { country, category } });
    }
  }
  return { paths, fallback: true };
}) satisfies GetStaticPaths;

export const getStaticProps = async (context: GetStaticPropsContext) => {
  try {
    const { params } = context;
    const category: Category =
      (params?.category?.toString() as Category) ?? 'general';
    const country: Country = (params?.country?.toString() as Country) ?? 'us';
    const options = {
      category,
      country,
      page: 1,
      pageSize: 20,
    };
    const { articles = [] } = await getTopHeadlines(options);
    return { props: { articles, category, country } };
  } catch {
    return { props: { articles: [], category: 'general', country: 'us' } };
  }
};

export default NewsPage;
