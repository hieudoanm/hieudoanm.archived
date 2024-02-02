import Button from '@mui/material/Button';
import { useRouter } from 'next/router';

export const Navbar = () => {
  const router = useRouter();

  const logOut = () => {
    sessionStorage.setItem('accessToken', '');
    router.push('/auth');
  };

  return (
    <nav className="border-b shadow">
      <div className="container mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg uppercase">Buzz Metrics</h1>
          </div>
          <div>
            <Button
              type="button"
              variant="outlined"
              onClick={logOut}
              className="uppercase">
              Log Out
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
