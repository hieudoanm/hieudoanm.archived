import { Button } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Navbar } from '@younetmedia/components/Navbar';
import { NextPage } from 'next';
import Link from 'next/link';

export const HomePage: NextPage = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Navbar />
      <main className="container mx-auto p-8">
        <div className="grid grid-cols-2 gap-8">
          <div className="col-span-1">
            <Link href="/socialheat">
              <Button fullWidth variant="outlined">
                Social Heat
              </Button>
            </Link>
          </div>
          <div className="col-span-1">
            <Link href="/socialtrend">
              <Button fullWidth variant="outlined">
                Social Trend
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </LocalizationProvider>
  );
};

export default HomePage;
