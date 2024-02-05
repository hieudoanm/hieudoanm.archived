import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Navbar } from '@younetmedia/common/components/Navbar';
import { ERROR_MESSAGE_AUTHENTICATION } from '@younetmedia/common/constants/app.constants';
import useAxios from '@younetmedia/common/hooks/use-fetch';
import { logger } from '@younetmedia/common/libs/log';
import dayjs, { Dayjs } from 'dayjs';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const downloadCSV = (
  total: {
    topic_id: string;
    topic_hot_trend_name: string;
    total_buzz_volumn: string;
  }[]
) => {
  const headers: string[] = [
    'topic_id',
    'topic_hot_trend_name',
    'total_buzz_volumn',
  ];
  const headerRow: string = `${headers.join(',')}`;
  const dataRows: string = total
    .map((result: any) => {
      return headers
        .map((header: string) => {
          if (header === 'query') {
            const cell = result[`${header}`] || '';
            return `"${cell.replaceAll('"', "'").replaceAll('#', '')}"`;
          }
          return result[`${header}`];
        })
        .join(',');
    })
    .join('\n');
  const csvContent = `data:text/csv;charset=utf-8,${headerRow}\n${dataRows}`;
  const encodedUri: string = encodeURI(csvContent);
  const link: HTMLAnchorElement = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute(
    'download',
    `${new Date().toISOString().split('T')[0]}.csv`
  );
  document.body.append(link); // Required for FF
  link.click(); // This will download the data file named "my_data.csv".
};

const SocialTrendForm: React.FC<{
  accessToken: string;
  dateFrom: Dayjs;
  dateTo: Dayjs;
  pin: string;
}> = ({ accessToken = '', dateFrom, dateTo, pin = '' }) => {
  const urlSearchParameters = new URLSearchParams();
  urlSearchParameters.set('rankedBy', 'buzz');
  urlSearchParameters.set('dateFrom', dateFrom ? dateFrom.toISOString() : '');
  urlSearchParameters.set('dateTo', dateTo ? dateTo.toISOString() : '');
  urlSearchParameters.set('limitTotal', '30');
  urlSearchParameters.set('limitNew', '30');
  urlSearchParameters.set('limitUptrend', '30');
  urlSearchParameters.set('limitDowntrend', '30');
  urlSearchParameters.set('selectedOption', 'all');
  urlSearchParameters.set('action', 'showMore');
  const url = `https://api-trend.younetmedia.com/socialtrend/hot-topic-ranking-list?${urlSearchParameters.toString()}`;
  logger.info(`pin ${pin}`);
  const { loading, error, data } = useAxios<{
    detailStatistics: { total: any[] };
  }>(url, {
    headers: { Authorization: accessToken },
  });

  if (loading) {
    return (
      <div className="card border shadow">
        <div className="card-body">
          <p className="text-center">Loading</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="card border shadow">
        <div className="card-body">
          <p className="text-center">{error.message}</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="card border shadow">
        <div className="card-body">
          <p className="text-center">No Data</p>
        </div>
      </div>
    );
  }

  const total = data.detailStatistics.total || [];

  return (
    <>
      <div className="col-span-1">
        <button
          type="button"
          className="w-full bg-blue-500 text-white btn"
          onClick={() => downloadCSV(total)}>
          Download CSV
        </button>
      </div>
      <div className="overflow-x-auto rounded border shadow">
        <table className="table">
          <thead>
            <tr>
              <td>No.</td>
              <td>Topic ID</td>
              <td>Name</td>
              <td align="right">Volumn</td>
            </tr>
          </thead>
          <tbody>
            {total.map(
              (
                {
                  topic_id = '',
                  topic_hot_trend_name = '',
                  total_buzz_volumn = 0,
                },
                index: number
              ) => {
                return (
                  <tr key={topic_id}>
                    <td>{index + 1}</td>
                    <td>{topic_id}</td>
                    <td>{topic_hot_trend_name}</td>
                    <td align="right">{total_buzz_volumn.toLocaleString()}</td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export const SocialTrendPage: NextPage = () => {
  const router = useRouter();

  const d: Date = new Date();
  const year: number = d.getFullYear();
  const month: number = d.getMonth();
  const date: number = d.getDate();
  const hours: number = d.getHours();
  logger.info({ year, month, date, hours });
  const today: Date = new Date(year, month, date, hours, 0, 0, 0);
  const toTime: number = today.getTime();
  const oneHourTime: number = 60 * 60 * 1000;
  const oneDayTime: number = 24 * oneHourTime;
  const sevenDaysTime: number = 7 * 24 * oneHourTime + 23 * oneHourTime;
  const thirtyDaysTime: number = 30 * 24 * oneHourTime + 23 * oneHourTime;

  const [pin, setPin] = useState<string>('');
  const [accessToken, setAccessToken] = useState<string>('');
  const [dateRange, setDateRange] = useState<{
    range: number;
    date: Dayjs;
  }>({
    range: oneDayTime,
    date: dayjs(toTime),
  });

  useEffect(() => {
    const cacheAccessToken: string =
      sessionStorage.getItem('accessToken') ?? '';
    if (!cacheAccessToken) {
      alert(ERROR_MESSAGE_AUTHENTICATION);
      router.push('/auth');
    }
    setAccessToken(cacheAccessToken);
  }, [router]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Navbar />
      <main className="container mx-auto p-8">
        <div className="flex flex-col gap-4 md:gap-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
            <div className="col-span-1 md:col-span-2">
              <input
                className="w-full input input-bordered"
                id="pin"
                placeholder="PIN"
                required
                value={pin}
                onChange={(event) => setPin(event.target.value)}
              />
            </div>
            <div className="col-span-1">
              <DesktopDatePicker
                label="Date"
                format="DD/MM/YYYY"
                value={dateRange.date}
                onChange={(newDate: Dayjs | null) =>
                  setDateRange({
                    ...dateRange,
                    date: newDate ?? dayjs(toTime),
                  })
                }
                className="w-full"
              />
            </div>
            <div className="col-span-1">
              <select
                className="w-full select select-bordered"
                id="range"
                name="range"
                value={dateRange.range}
                onChange={(event) =>
                  setDateRange({
                    ...dateRange,
                    range: Number.parseInt(event.target.value.toString(), 10),
                  })
                }>
                <option value="">Range</option>
                <option value={oneDayTime}>24 hours</option>
                <option value={sevenDaysTime}>7 days ago</option>
                <option value={thirtyDaysTime}>30 days ago</option>
              </select>
            </div>
          </div>
          {accessToken.length > 0 ? (
            <SocialTrendForm
              accessToken={accessToken}
              dateFrom={dayjs(dateRange.date.unix() * 1000 - dateRange.range)}
              dateTo={dateRange.date}
              pin={pin}
            />
          ) : (
            <></>
          )}
        </div>
      </main>
    </LocalizationProvider>
  );
};

export default SocialTrendPage;
