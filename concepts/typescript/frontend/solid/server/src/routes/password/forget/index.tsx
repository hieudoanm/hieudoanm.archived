import Button from '@suid/material/Button';
import Container from '@suid/material/Container';
import TextField from '@suid/material/TextField';
import { Component, createSignal } from 'solid-js';
import SolidSVG from '../../../assets/solid.svg';
import Link from '../../../components/atoms/Link';

export const ForgetPasswordPage: Component = () => {
  const [username, setUsername] = createSignal('');

  const forget = (event: any) => {
    event.preventDefault();
  };

  return (
    <Container>
      <main class="flex h-screen w-full items-center justify-center">
        <div class="w-full max-w-lg rounded border px-8 py-16 shadow-2xl">
          <form onSubmit={forget}>
            <div class="flex flex-col gap-8">
              <div class="mx-auto w-32">
                <Link href="/">
                  <SolidSVG />
                </Link>
              </div>
              <div class="flex flex-col gap-2 text-center">
                <h1 class="text-4xl font-bold uppercase">Forget</h1>
                <p class="text-gray-500">Enter username to reset password</p>
              </div>
              <div class="flex flex-col gap-4">
                <TextField
                  id="username"
                  name="username"
                  label="Username"
                  placeholder="Username"
                  value={username()}
                  onChange={(event) => setUsername(event.target.value)}
                  required
                />
              </div>
              <div class="flex flex-col gap-4">
                <Button type="submit" variant="contained">
                  Send Email
                </Button>
                <Link href="/auth/sign-in" class="text-center text-blue-500">
                  Back to Sign In
                </Link>
              </div>
            </div>
          </form>
        </div>
      </main>
    </Container>
  );
};

export default ForgetPasswordPage;
