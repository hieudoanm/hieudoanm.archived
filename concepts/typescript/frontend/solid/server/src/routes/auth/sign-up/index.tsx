import { useNavigate } from '@solidjs/router';
import Visibility from '@suid/icons-material/Visibility';
import VisibilityOff from '@suid/icons-material/VisibilityOff';
import Button from '@suid/material/Button';
import Checkbox from '@suid/material/Checkbox';
import Container from '@suid/material/Container';
import FormControlLabel from '@suid/material/FormControlLabel';
import IconButton from '@suid/material/IconButton';
import TextField from '@suid/material/TextField';
import { Component, createSignal } from 'solid-js';
import SolidSVG from '../../../assets/solid.svg';
import Link from '../../../components/atoms/Link';

const isProd: boolean = process.env.NODE_ENV === 'production';
const base: string = isProd ? '/solid-template' : '';

export const SignUpPage: Component = () => {
  const navigate = useNavigate();
  const [username, setUsername] = createSignal<string>('');
  const [password, setPassword] = createSignal<string>('');
  const [showPassword, setShowPassword] = createSignal<boolean>(false);

  const signUp = (event: any) => {
    event.preventDefault();
    if (username() === 'username' && password() === 'password') {
      navigate(`${base}/apps/table`);
    }
  };

  return (
    <Container>
      <main class="flex h-screen w-full items-center justify-center">
        <div class="w-full max-w-lg rounded border px-8 py-16 shadow-2xl">
          <form onSubmit={signUp}>
            <div class="flex flex-col gap-8">
              <div class="mx-auto w-32">
                <Link href="/">
                  <SolidSVG />
                </Link>
              </div>
              <div class="flex flex-col gap-2 text-center">
                <h1 class="text-4xl font-bold uppercase">Welcome</h1>
                <p class="text-gray-500">Create new account to continue</p>
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
                <TextField
                  type={showPassword() ? 'text' : 'password'}
                  id="password"
                  name="password"
                  label="Password"
                  placeholder="Password"
                  value={password()}
                  onChange={(event) => setPassword(event.target.value)}
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        onClick={() => setShowPassword(!showPassword())}>
                        {showPassword() ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    ),
                  }}
                  required
                />
              </div>
              <div class="flex flex-col gap-4">
                <div class="flex items-center justify-between">
                  <FormControlLabel control={<Checkbox />} label="Remember" />
                  <Link href="/password/forget">
                    <p class="text-blue-500">
                      Forget <span class="hidden md:inline">Your Password</span>
                      ?
                    </p>
                  </Link>
                </div>
                <Button type="submit" variant="contained">
                  Sign Up
                </Button>
                <Link href="/auth/sign-in" class="text-center text-blue-500">
                  Sign In
                </Link>
              </div>
            </div>
          </form>
        </div>
      </main>
    </Container>
  );
};

export default SignUpPage;
