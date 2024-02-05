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
          <div>
            <h1 className="text-lg uppercase">Buzz Metrics</h1>
          </div>
          <div>
            <button
              type="button"
              onClick={logOut}
              className="btn bg-teal-500 uppercase">
              Log Out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
