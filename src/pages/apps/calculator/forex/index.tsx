import { getLatest } from '@web/clients/forex/frankfurter/frankfurter.client';
import { ForexPage } from '@web/router/apps/calculator/forex/ForexPage';
import { GetStaticProps, NextPage } from 'next';

const ForexNextPage: NextPage<{ rates: Record<string, number> }> = ({
  rates,
}) => <ForexPage rates={rates} />;

export const getStaticProps: GetStaticProps<{
  rates: Record<string, number>;
}> = async () => {
  try {
    const { amount = 1, base = 'EUR', rates = {} } = await getLatest();
    rates[base] = amount;
    return { props: { rates } };
  } catch {
    return { props: { rates: {} } };
  }
};

export const dynamic = 'force-static';

export default ForexNextPage;
