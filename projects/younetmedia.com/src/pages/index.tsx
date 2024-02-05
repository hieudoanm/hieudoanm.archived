import { Navbar } from '@younetmedia/common/components/Navbar';
import { NextPage } from 'next';
import Link from 'next/link';

export const HomePage: NextPage = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-8">
        <div className="grid grid-cols-2 gap-8">
          <div className="col-span-1">
            <Link href="/socialheat">
              <button
                className="btn bg-teal-500 text-white w-full"
                type="button">
                Social Heat
              </button>
            </Link>
          </div>
          <div className="col-span-1">
            <Link href="/socialtrend">
              <button
                className="btn bg-teal-500 text-white w-full"
                type="button">
                Social Trend
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
