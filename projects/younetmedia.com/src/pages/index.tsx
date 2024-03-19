import { LayoutTemplate } from '@younetmedia/templates/LayoutTemplate';
import { trpcClient } from '@younetmedia/utils/trpc.client';
import { NextPage } from 'next';
import Link from 'next/link';

export const HomePage: NextPage = () => {
  const statusQuery = trpcClient.health.useQuery({ message: 'OK' });

  if (!statusQuery.data) {
    return (
      <LayoutTemplate>
        <div className="w-full h-full flex justify-center items-center">
          Loading
        </div>
      </LayoutTemplate>
    );
  }

  return (
    <LayoutTemplate>
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-2 gap-8">
          <div className="col-span-1">
            <Link href="/socialheat">
              <button
                className="btn bg-blue-500 text-white w-full"
                type="button">
                Social Heat
              </button>
            </Link>
          </div>
          <div className="col-span-1">
            <Link href="/socialtrend">
              <button
                className="btn bg-blue-500 text-white w-full"
                type="button">
                Social Trend
              </button>
            </Link>
          </div>
        </div>
      </div>
    </LayoutTemplate>
  );
};

export default HomePage;
