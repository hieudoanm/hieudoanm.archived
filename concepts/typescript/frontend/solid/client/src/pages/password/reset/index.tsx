import Button from '@suid/material/Button';
import Container from '@suid/material/Container';
import TextField from '@suid/material/TextField';
import { Component, createSignal } from 'solid-js';
import SolidSVG from '../../../assets/solid.svg';
import Link from '../../../components/atoms/Link';

export const ResetPasswordPage: Component = () => {
  const [newPassword, setNewPassword] = createSignal('');
  const [confirmedPassword, setConfirmedPassword] = createSignal('');

  const reset = (event: any) => {
    event.preventDefault();
  };

  return (
    <Container>
      <main class="flex h-screen w-full items-center justify-center">
        <div class="w-full max-w-lg rounded border px-8 py-16 shadow-2xl">
          <form onSubmit={reset}>
            <div class="flex flex-col gap-8">
              <div class="mx-auto w-32">
                <Link href="/">
                  <SolidSVG />
                </Link>
              </div>
              <div class="flex flex-col gap-2 text-center">
                <h1 class="text-4xl font-bold uppercase">Reset</h1>
                <p class="text-gray-500">Enter new password to reset</p>
              </div>
              <div class="flex flex-col gap-4">
                <TextField
                  id="newPassword"
                  name="newPassword"
                  label="New Password"
                  placeholder="New Password"
                  value={newPassword()}
                  onChange={(event) => setNewPassword(event.target.value)}
                  required
                />
                <TextField
                  id="confirmedPassword"
                  name="confirmedPassword"
                  label="Confirm Password"
                  placeholder="Confirm Password"
                  value={confirmedPassword()}
                  onChange={(event) => setConfirmedPassword(event.target.value)}
                  required
                />
              </div>
              <div class="flex flex-col gap-4">
                <Button type="submit" variant="contained">
                  Reset Password
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

export default ResetPasswordPage;
