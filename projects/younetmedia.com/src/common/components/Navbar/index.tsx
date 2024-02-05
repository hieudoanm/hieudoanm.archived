import Link from 'next/link';
import { useRouter } from 'next/router';

export const Navbar: React.FC = () => {
  const router = useRouter();

  const logOut = () => {
    sessionStorage.setItem('accessToken', '');
    router.push('/auth');
  };

  return (
    <nav className="border-b shadow">
      <div className="container mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <Link href="/">
              <h1 className="uppercase">Buzz Metrics</h1>
            </Link>
            <Link href="/socialheat">
              <p>Social Heat</p>
            </Link>
            <Link href="/socialtrend">
              <p>Social Trend</p>
            </Link>
          </div>
          <div>
            <button
              type="button"
              onClick={logOut}
              className="btn bg-blue-500 text-white uppercase">
              Log Out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
