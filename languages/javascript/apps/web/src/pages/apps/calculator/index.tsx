import { GridTemplate } from '@web/router/apps/Apps';
import { NextPage } from 'next';

const CalculatorApps: NextPage = () => {
  return <GridTemplate folder='calculator' />;
};

export const dynamic = 'force-static';

export default CalculatorApps;
