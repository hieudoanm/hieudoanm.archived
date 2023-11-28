import Button from '@mui/material/Button';
import Link from 'next/link';
import React from 'react';

export const ErrorTemplate: React.FC<{ code: number; message: string }> = ({
  code = 200,
  message = ''
}) => {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col gap-4 text-center uppercase">
        <h1 className="text-9xl font-bold">{code}</h1>
        <p className="text-4xl">{message}</p>
        <Link href="/">
          <Button variant="contained" fullWidth>
            Back to Home
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default ErrorTemplate;
