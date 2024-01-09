import {
  Button,
  Card,
  CardContent,
  TextField,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ERROR_MESSAGE_AUTHENTICATION } from '@younetmedia/common/constants';
import { logger } from '@younetmedia/common/libs/log';
import { Navbar } from '@younetmedia/components/Navbar';
import useAxios from '@younetmedia/hooks/use-fetch';
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
    'total_buzz_volumn'
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
    headers: { Authorization: accessToken }
  });

  if (loading) {
    return (
      <Card className="border shadow">
        <CardContent>
          <p className="text-center">Loading</p>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="border shadow">
        <CardContent>
          <p className="text-center">{error.message}</p>
        </CardContent>
      </Card>
    );
  }

  if (!data) {
    return (
      <Card className="border shadow">
        <CardContent>
          <p className="text-center">No Data</p>
        </CardContent>
      </Card>
    );
  }

  const total = data.detailStatistics.total || [];

  return (
    <>
      <div className="col-span-1">
        <Button
          fullWidth
          type="button"
          variant="outlined"
          onClick={() => downloadCSV(total)}
        >
          Download CSV
        </Button>
      </div>
      <TableContainer className="rounded border shadow">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>Topic ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="right">Volumn</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {total.map(
              (
                {
                  topic_id = '',
                  topic_hot_trend_name = '',
                  total_buzz_volumn = 0
                },
                index: number
              ) => {
                return (
                  <TableRow key={topic_id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{topic_id}</TableCell>
                    <TableCell>{topic_hot_trend_name}</TableCell>
                    <TableCell align="right">
                      {total_buzz_volumn.toLocaleString()}
                    </TableCell>
                  </TableRow>
                );
              }
            )}
          </TableBody>
        </Table>
      </TableContainer>
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
    date: dayjs(toTime)
  });

  useEffect(() => {
    const cacheAccessToken: string =
      sessionStorage.getItem('accessToken') ?? '';
    if (!cacheAccessToken) {
      alert(ERROR_MESSAGE_AUTHENTICATION);
      router.push('/auth');
    }
    setAccessToken(cacheAccessToken);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Navbar />
      <main className="container mx-auto p-8">
        <div className="flex flex-col gap-4 md:gap-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
            <div className="col-span-1 md:col-span-2">
              <TextField
                fullWidth
                label="PIN"
                variant="outlined"
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
                    date: newDate ?? dayjs(toTime)
                  })
                }
                className="w-full"
              />
            </div>
            <div className="col-span-1">
              <Select
                fullWidth
                id="range"
                name="range"
                placeholder="Range"
                value={dateRange.range}
                onChange={(event) =>
                  setDateRange({
                    ...dateRange,
                    range: Number.parseInt(event.target.value.toString(), 10)
                  })
                }
              >
                <MenuItem value={oneDayTime}>24 hours</MenuItem>
                <MenuItem value={sevenDaysTime}>7 days ago</MenuItem>
                <MenuItem value={thirtyDaysTime}>30 days ago</MenuItem>
              </Select>
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
