import { ErrorTemplate } from '@younetmedia/templates/ErrorTemplate';
import { NextPage } from 'next';

const InternalServerErrorPage: NextPage = () => (
  <ErrorTemplate code={500} message="Error" />
);

export default InternalServerErrorPage;
