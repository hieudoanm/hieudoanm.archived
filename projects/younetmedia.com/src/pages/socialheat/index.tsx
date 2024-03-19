import { ParsedUrlQuery } from 'node:querystring';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Navbar } from '@younetmedia/common/components/Navbar';
import {
  ERROR_MESSAGE_AUTHENTICATION,
  ERROR_MESSAGE_DATE_RANGE,
  ERROR_MESSAGE_MISSING_PIN,
} from '@younetmedia/common/constants/app.constants';
import {
  NEXT_PUBLIC_PIN,
  PIN,
} from '@younetmedia/common/environments/environments';
import { logger } from '@younetmedia/common/libs/log';
import { queryResult } from '@younetmedia/common/services/younetmedia.service';
import { Result } from '@younetmedia/common/types/younetmedia.types';
import dayjs, { Dayjs } from 'dayjs';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';

const FORMAT: string = 'YYYY-MM-DD';

const getQueryParameter = (
  query: ParsedUrlQuery,
  key: string,
  defaultValue: string
): string => {
  const values: string | string[] | undefined = query[key];
  if (!values) return defaultValue;
  if (typeof values === 'object') {
    const [first] = values;
    return first;
  }
  return values;
};

type AppState = {
  input: 'input' | 'table';
  pin: string;
  topicId: number;
  fromDate: Dayjs | null;
  toDate: Dayjs | null;
  loading: number;
};

export const SocialHeatPage: NextPage = () => {
  const router = useRouter();
  const { query } = router;
  const [today] = new Date().toISOString().split('T');

  const defaultAppState: AppState = {
    topicId: Number.parseInt(getQueryParameter(query, 'topicId', '0') ?? '0'),
    input: getQueryParameter(query, 'input', 'input') as 'input' | 'table',
    fromDate: dayjs(getQueryParameter(query, 'fromDate', today)),
    toDate: dayjs(getQueryParameter(query, 'toDate', today)),
    pin: getQueryParameter(query, 'pin', ''),
    loading: 0,
  };
  logger.info('defaultAppState', defaultAppState);
  const [appState, setAppState] = useState<AppState>(defaultAppState);

  const [queryString, setQueryString] = useState<string>('');
  const [queries, setQueries] = useState<string[]>([]);
  const [results, setResults] = useState<Result[]>([]);
  const [accessToken, setAccessToken] = useState<string>('');

  useEffect(() => {
    const cacheAccessToken: string =
      sessionStorage.getItem('accessToken') ?? '';
    if (!cacheAccessToken) {
      alert(ERROR_MESSAGE_AUTHENTICATION);
      router.push('/auth');
    }
    setAccessToken(cacheAccessToken);
  }, [router]);

  const setQueryParameters = ({
    pin = '',
    loading = 0,
    input,
    topicId,
    fromDate,
    toDate,
  }: {
    loading: number;
    pin: string;
    input: string;
    topicId: number;
    fromDate: Dayjs | null;
    toDate: Dayjs | null;
  }) => {
    logger.info(pin, loading);
    router.push({
      query: {
        pin,
        input,
        topicId,
        fromDate: fromDate?.format(FORMAT) ?? '',
        toDate: toDate?.format(FORMAT) ?? '',
      },
    });
  };

  const changeInput = (newInput: 'input' | 'table') => {
    setAppState({ ...appState, input: newInput });
    setQueryParameters({ ...appState, input: newInput });
  };

  const changeFromDate = (newFromDate: Dayjs) => {
    setAppState({ ...appState, fromDate: newFromDate });
    setQueryParameters({ ...appState, fromDate: newFromDate });
  };

  const changeToDate = (newToDate: Dayjs) => {
    setAppState({ ...appState, toDate: newToDate });
    setQueryParameters({ ...appState, toDate: newToDate });
  };

  const changeTopicId = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const newTopicId: number =
      Number.parseInt(event?.target.value || '0', 10) || 0;
    setAppState({ ...appState, topicId: newTopicId });
    setQueryParameters({ ...appState, topicId: newTopicId });
  };

  const changeQueryString = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const newQueryString = event?.target.value || '';
    setQueryString(newQueryString);
    setQueries(newQueryString.split('\n'));
  };

  const runQueries = async (event: FormEvent<HTMLFormElement>) => {
    if (appState.pin !== PIN && appState.pin !== NEXT_PUBLIC_PIN) {
      alert(ERROR_MESSAGE_MISSING_PIN);
      return;
    }

    event.preventDefault();
    if (appState.fromDate === null || appState.toDate === null) {
      alert(ERROR_MESSAGE_DATE_RANGE);
      return;
    }

    if (!accessToken) {
      alert(ERROR_MESSAGE_AUTHENTICATION);
      router.push('/auth');
    }

    setAppState({ ...appState, loading: 0 });
    setResults([]);
    const newResults = [];
    let index = 0;
    const total = queries.length - 1;
    for (const query of queries) {
      try {
        const result: Result = await queryResult(
          appState.topicId,
          {
            fromDate: appState.fromDate?.format(FORMAT) ?? '',
            toDate: appState.toDate?.format(FORMAT) ?? '',
          },
          query
        );
        newResults.push(result);
      } catch (error) {
        logger.error(error);
        newResults.push({
          query,
          total_collectable_mentions: -1,
          total_mentions: -1,
        } as Result);
      }
      const newLoading = Number.parseFloat(((index / total) * 100).toFixed(2));
      setAppState({ ...appState, loading: newLoading });
      index++;
    }
    setResults(newResults);
  };

  const downloadCSV = () => {
    const headers: string[] = [
      'query',
      'total_collectable_mentions',
      'total_mentions',
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
    <div className="bg-white">
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
                      <button
                        type="submit"
                        className="btn bg-blue-500 text-white">
                        Run Queries
                      </button>
                    </div>
                  </div>
                  <div className="col-span-12">
                    <input
                      type="text"
                      className="w-full input input-bordered"
                      id="pin"
                      placeholder="PIN"
                      required
                      value={appState.pin}
                      onChange={(event) => {
                        setAppState({ ...appState, pin: event.target.value });
                        setQueryParameters({
                          ...appState,
                          pin: event.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="col-span-12">
                    <input
                      type="number"
                      id="topicId"
                      placeholder="Topic ID"
                      className="w-full input input-bordered"
                      value={appState.topicId}
                      onChange={changeTopicId}
                      required
                    />
                  </div>
                  <div className="col-span-6">
                    <DesktopDatePicker
                      label="From Date"
                      format="DD/MM/YYYY"
                      value={appState.fromDate}
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
                      value={appState.toDate}
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
                    <div className="flex items-center justify-center">
                      <div className="join">
                        <button
                          type="button"
                          onClick={() => changeInput('input')}
                          className={`btn join-item ${
                            appState.input === 'input'
                              ? 'bg-blue-500 text-white'
                              : 'bg-gray-500 text-white'
                          }`}>
                          Input
                        </button>
                        <button
                          type="button"
                          onClick={() => changeInput('table')}
                          className={`btn join-item ${
                            appState.input === 'table'
                              ? 'bg-blue-500 text-white'
                              : 'bg-gray-500 text-white'
                          }`}>
                          Table
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12">
                    {appState.input === 'input' ? (
                      <textarea
                        id="queries"
                        placeholder="Queries"
                        className="w-full textarea textarea-bordered"
                        value={queryString}
                        onChange={changeQueryString}
                        rows={12}
                        required
                      />
                    ) : (
                      <div className="rounded border">
                        {queries.map((query: string, index: number) => {
                          return (
                            <div
                              key={`query-${query}`}
                              className="grid grid-cols-12 border-b py-4">
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
                    <button
                      type="button"
                      className="btn bg-blue-500 text-white"
                      onClick={downloadCSV}>
                      Download CSV
                    </button>
                  </div>
                </div>
                <div className="col-span-12">
                  <div className="overflow-x-auto rounded border shadow">
                    <table className="table">
                      <thead>
                        <tr>
                          <td align="center">No.</td>
                          <td>Query</td>
                          <td align="right">Collectable Total Mentions</td>
                          <td align="right">Total Mentions</td>
                        </tr>
                      </thead>
                      <tbody>
                        {appState.loading < 100 ? (
                          <tr className="border-0 border-none">
                            <td
                              align="center"
                              colSpan={4}
                              className="border-0 border-none uppercase">
                              {appState.loading}%
                            </td>
                          </tr>
                        ) : (
                          <>
                            {results.length > 0 ? (
                              results.map((result: Result, index: number) => {
                                const resultQuery = result.query || '';
                                return (
                                  <tr
                                    key={`result-${resultQuery.replaceAll(
                                      ' ',
                                      ''
                                    )}`}>
                                    <td align="center">{index + 1}</td>
                                    <td>
                                      <p className="truncate w-32">
                                        {resultQuery}
                                      </p>
                                    </td>
                                    <td align="right">
                                      {result.total_collectable_mentions}
                                    </td>
                                    <td align="right">
                                      {result.total_mentions}
                                    </td>
                                  </tr>
                                );
                              })
                            ) : (
                              <tr className="border-0 border-none">
                                <td
                                  align="center"
                                  colSpan={4}
                                  className="border-0 border-none uppercase">
                                  No Data
                                </td>
                              </tr>
                            )}
                          </>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </LocalizationProvider>
    </div>
  );
};

export default SocialHeatPage;
