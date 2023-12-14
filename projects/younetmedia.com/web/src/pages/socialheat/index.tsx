import {
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  ToggleButton,
  ToggleButtonGroup
} from '@mui/material';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  ERROR_MESSAGE_AUTHENTICATION,
  ERROR_MESSAGE_DATE_RANGE
} from '@younetmedia/common/constants';
import { logger } from '@younetmedia/common/libs/log';
import { Navbar } from '@younetmedia/components/Navbar';
import { queryResult } from '@younetmedia/services/younetmedia.service';
import { Result } from '@younetmedia/types';
import { Dayjs } from 'dayjs';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { ChangeEvent, FormEvent, useState } from 'react';

export const SocialHeatPage: NextPage = () => {
  const router = useRouter();

  const [topicId, setTopicId] = useState<number>(0);
  const [fromDate, setFromDate] = useState<Dayjs>();
  const [toDate, setToDate] = useState<Dayjs>();
  const [input, setInput] = useState<'input' | 'table'>('input');
  const [queryString, setQueryString] = useState<string>('');
  const [queries, setQueries] = useState<string[]>([]);
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState<number>(0);

  const changeInput = (
    _event: React.MouseEvent<HTMLElement>,
    newInput: 'input' | 'table'
  ) => {
    setInput(newInput);
  };

  const changeFromDate = (newFromDate: Dayjs) => {
    setFromDate(newFromDate);
  };

  const changeToDate = (newToDate: Dayjs) => {
    setToDate(newToDate);
  };

  const changeTopicId = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const newTopicId: number =
      Number.parseInt(event?.target.value || '0', 10) || 0;
    setTopicId(newTopicId);
  };

  const changeQueryString = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const newQueryString = event?.target.value || '';
    setQueryString(newQueryString);
    setQueries(newQueryString.split('\n'));
  };

  const runQueries = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (fromDate === null || toDate === null) {
      alert(ERROR_MESSAGE_DATE_RANGE);
      return;
    }

    const accessToken: string = sessionStorage.getItem('accessToken') ?? '';
    if (!accessToken) {
      alert(ERROR_MESSAGE_AUTHENTICATION);
      router.push('/auth');
    }

    setLoading(0);
    setResults([]);
    const newResults = [];
    let index = 0;
    const total = queries.length - 1;
    for (const query of queries) {
      try {
        const result: Result = await queryResult(
          topicId,
          {
            fromDate: fromDate?.format('YYYY-MM-DD') ?? '',
            toDate: toDate?.format('YYYY-MM-DD') ?? ''
          },
          query
        );
        newResults.push(result);
      } catch (error) {
        logger.error(error);
        newResults.push({
          query,
          total_collectable_mentions: -1,
          total_mentions: -1
        } as Result);
      }
      setLoading(Number.parseFloat(((index / total) * 100).toFixed(2)));
      index++;
    }
    setResults(newResults);
  };

  const downloadCSV = () => {
    const headers: string[] = [
      'query',
      'total_collectable_mentions',
      'total_mentions'
    ];
    const headerRow: string = `${headers.join(',')}`;
    const dataRows: string = results
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

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Navbar />
      <main className="container mx-auto p-8">
        <section className="mb-8">
          <div className="rounded border p-8 shadow-2xl">
            <form onSubmit={runQueries}>
              <div className="grid grid-cols-12 items-center gap-8">
                <div className="col-span-12">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg uppercase">Queries</h2>
                    <Button type="submit" variant="outlined">
                      Run Queries
                    </Button>
                  </div>
                </div>
                <div className="col-span-12">
                  <TextField
                    type="number"
                    id="topicId"
                    label="Topic ID"
                    placeholder="Topic ID"
                    className="w-full"
                    value={topicId}
                    onChange={changeTopicId}
                    required
                  />
                </div>
                <div className="col-span-6">
                  <DesktopDatePicker
                    label="From Date"
                    format="DD/MM/YYYY"
                    value={fromDate}
                    onChange={(newDate: Dayjs | null) => {
                      if (!newDate) {
                        return;
                      }
                      changeFromDate(newDate);
                    }}
                    className="w-full"
                  />
                </div>
                <div className="col-span-6">
                  <DesktopDatePicker
                    label="To Date"
                    format="DD/MM/YYYY"
                    value={toDate}
                    onChange={(newDate: Dayjs | null) => {
                      if (!newDate) {
                        return;
                      }
                      changeToDate(newDate);
                    }}
                    className="w-full"
                  />
                </div>
                <div className="col-span-12">
                  <Stack spacing={2} alignItems="center">
                    <ToggleButtonGroup
                      size="large"
                      value={input}
                      onChange={changeInput}
                      exclusive={true}
                    >
                      <ToggleButton value="input" key="input">
                        Input
                      </ToggleButton>
                      <ToggleButton value="table" key="table">
                        Table
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </Stack>
                </div>
                <div className="col-span-12">
                  {input === 'input' ? (
                    <TextField
                      id="queries"
                      label="Queries"
                      placeholder="Queries"
                      className="w-full"
                      value={queryString}
                      onChange={changeQueryString}
                      multiline
                      rows={12}
                      required
                    />
                  ) : (
                    <div className="rounded border">
                      {queries.map((query: string, index: number) => {
                        return (
                          <div
                            key={`query-${query}`}
                            className="grid grid-cols-12 border-b py-4"
                          >
                            <div className="col-span-1 text-center">
                              {index + 1}
                            </div>
                            <div className="col-span-11 truncate">
                              <p className="truncate">{query}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </section>
        <section>
          <div className="rounded border p-8 shadow-2xl">
            <div className="grid grid-cols-12 items-center gap-8">
              <div className="col-span-12">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg uppercase">Results</h2>
                  <Button
                    type="button"
                    variant="outlined"
                    onClick={downloadCSV}
                  >
                    Download CSV
                  </Button>
                </div>
              </div>
              <div className="col-span-12">
                <TableContainer
                  component={Paper}
                  sx={{ maxHeight: 440 }}
                  className="border"
                >
                  <Table stickyHeader sx={{ minWidth: 650 }} aria-label="table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">No.</TableCell>
                        <TableCell sx={{ maxWidth: '300px' }}>Query</TableCell>
                        <TableCell align="right">
                          Collectable Total Mentions
                        </TableCell>
                        <TableCell align="right">Total Mentions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {loading < 100 ? (
                        <TableRow className="border-0 border-none">
                          <TableCell
                            align="center"
                            colSpan={4}
                            className="border-0 border-none uppercase"
                          >
                            {loading}%
                          </TableCell>
                        </TableRow>
                      ) : (
                        <>
                          {results.length > 0 ? (
                            results.map((result: Result, index: number) => {
                              const resultQuery = result.query || '';
                              return (
                                <TableRow
                                  key={`result-${resultQuery.replaceAll(
                                    ' ',
                                    ''
                                  )}`}
                                  sx={{
                                    '&:last-child td, &:last-child th': {
                                      border: 0
                                    }
                                  }}
                                >
                                  <TableCell align="center">
                                    {index + 1}
                                  </TableCell>
                                  <TableCell
                                    component="th"
                                    scope="row"
                                    sx={{ maxWidth: '300px' }}
                                  >
                                    <p className="truncate">{resultQuery}</p>
                                  </TableCell>
                                  <TableCell align="right">
                                    {result.total_collectable_mentions}
                                  </TableCell>
                                  <TableCell align="right">
                                    {result.total_mentions}
                                  </TableCell>
                                </TableRow>
                              );
                            })
                          ) : (
                            <TableRow className="border-0 border-none">
                              <TableCell
                                align="center"
                                colSpan={4}
                                className="border-0 border-none uppercase"
                              >
                                No Data
                              </TableCell>
                            </TableRow>
                          )}
                        </>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
          </div>
        </section>
      </main>
    </LocalizationProvider>
  );
};

export default SocialHeatPage;
