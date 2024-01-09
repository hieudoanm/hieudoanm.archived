import Button from '@suid/material/Button';
import type { Component } from 'solid-js';
import Link from '../components/atoms/Link';

const NotFoundPage: Component = () => {
  return (
    <main class="flex h-screen w-full items-center justify-center">
      <div class="flex flex-col gap-4 text-center uppercase">
        <h1 class="text-9xl font-bold">404</h1>
        <p class="text-3xl">Page Not Found</p>
        <Link href="/">
          <Button variant="contained" fullWidth>
            Back to Home
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;
