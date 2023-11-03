// eslint-disable-next-line filenames/match-regex
import Button from '@mui/material/Button';
import { NextPage } from 'next';
import Link from 'next/link';

const ErrorPage: NextPage = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <h1 className="text-9xl font-bold">500</h1>
      <p className="text-4xl">Error</p>
      <Link href="/">
        <Button variant="contained" fullWidth>
          Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default ErrorPage;
