import { Weight } from '@web/router/apps/calculator/weight';
import { NextPage } from 'next';

const WeightPage: NextPage = () => {
  return <Weight />;
};

export const dynamic = 'force-static';

export default WeightPage;
