import { ErrorTemplate } from '@younetmedia/templates/ErrorTemplate';
import { NextPage } from 'next';

export const NotFoundPage: NextPage = () => (
  <ErrorTemplate code={404} message="Page Not Found" />
);

export default NotFoundPage;
