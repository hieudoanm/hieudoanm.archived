import { AppLayout } from '@web/layout/AppLayout';
import { addZero } from '@web/utils/add-zero';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { FaPause } from 'react-icons/fa';
import { FaArrowsRotate, FaPlay, FaScrewdriverWrench } from 'react-icons/fa6';

type ChessClockSide = 'top' | 'bottom';

type ChessClockState = {
  running: boolean;
  current: ChessClockSide | '';
  milliseconds: { top: number; bottom: number };
  increment: { top: number; bottom: number };
};

const options: number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 30, 45, 60, 90, 120, 150, 180,
];

export const ChessClock: FC = () => {
  const oneUnit = 10;

  const [timeOption, setTimeOption] = useState<string>('10+0');

  const initial: ChessClockState = {
    milliseconds: { top: 10 * 60 * 1000, bottom: 10 * 60 * 1000 },
    increment: { top: 0, bottom: 0 },
    current: '',
    running: false,
  };
  const [clock, setClock] = useState<ChessClockState>(initial);
  const [modal, setModal] = useState({
    topTime: 10,
    bottomTime: 10,
    topIncrement: 0,
    bottomIncrement: 0,
  });
  const [timer, setTimer] = useState<any>(null);

  const click = (side: ChessClockSide) => {
    const otherSide: ChessClockSide = side === 'top' ? 'bottom' : 'top';
    setClock((previousClock) => ({
      ...previousClock,
      current: otherSide,
      running: true,
    }));

    const newTimer = setInterval(() => {
      if (clock.milliseconds.top === 0 || clock.milliseconds.bottom === 0) {
        clearInterval(timer);
      } else {
        setClock(
          ({ current, milliseconds, increment, running }: ChessClockState) => {
            if (current === '')
              return { current, milliseconds, increment, running };
            const newCurrentMilliseconds: number =
              milliseconds[current] - oneUnit;

            return {
              current,
              running,
              increment,
              milliseconds: {
                ...milliseconds,
                [current]: newCurrentMilliseconds,
              },
            };
          }
        );
      }
    }, oneUnit);

    setTimer(newTimer);
  };

  const format = (milliseconds: number): string => {
    const minutes: number = Math.floor(milliseconds / (60 * 1000));
    const remainingMilliseconds: string = (
      (milliseconds % (60 * 1000)) /
      1000
    ).toFixed(1);
    const [seconds, ms] = remainingMilliseconds.split('.');
    return `${addZero(minutes)}:${addZero(parseFloat(seconds))}.${ms}`;
  };

  useEffect(() => {
    return () => {
      clearInterval(timer);
    };
  }, [timer]);

  const pause = () => {
    setClock({ ...clock, running: false });
    clearInterval(timer);
  };

  return (
    <AppLayout nav full>
      <div className='container mx-auto h-full'>
        <div className='h-full p-4 md:p-8'>
          <div className='flex h-full flex-row gap-2 md:flex-col md:gap-4'>
            <div className='order-2 grow md:order-1'>
              <div className='grid h-full grid-cols-1 gap-2 md:grid-cols-2 md:gap-4'>
                <div className='col-span-1'>
                  <button
                    type='button'
                    className={`btn ${clock.current === 'top' ? 'btn-secondary' : 'btn-primary'} h-full w-full`}
                    onClick={() => click('top')}>
                    <div className='rotate-180 text-6xl md:rotate-0 md:text-9xl'>
                      {format(clock.milliseconds.top)}
                    </div>
                  </button>
                </div>
                <div className='col-span-1'>
                  <button
                    type='button'
                    className={`btn ${clock.current === 'bottom' ? 'btn-secondary' : 'btn-primary'} h-full w-full`}
                    onClick={() => click('bottom')}>
                    <div className='text-6xl md:text-9xl'>
                      {format(clock.milliseconds.bottom)}
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className='order-1 grid grid-cols-1 gap-2 md:order-2 md:grid-cols-3 md:gap-4'>
              <div className='col-span-1'>
                <button
                  type='button'
                  className='btn btn-primary h-full w-full'
                  disabled={clock.current === ''}
                  onClick={() => {
                    if (clock.running) {
                      pause();
                    } else if (clock.current !== '') {
                      click(clock.current === 'top' ? 'bottom' : 'top');
                    }
                  }}>
                  {clock.running ? <FaPause /> : <FaPlay />}
                </button>
              </div>
              <div className='col-span-1'>
                <button
                  type='button'
                  className='btn btn-primary h-full w-full'
                  onClick={() => setClock(initial)}>
                  <FaArrowsRotate />
                </button>
              </div>
              <div className='col-span-1'>
                <button
                  type='button'
                  className='btn btn-primary h-full w-full'
                  onClick={() => {
                    (
                      document.getElementById('chess-clock-modal') as any
                    ).showModal();
                  }}>
                  <FaScrewdriverWrench />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <dialog id='chess-clock-modal' className='modal'>
        <div className='modal-box'>
          <div className='flex flex-col gap-y-4'>
            <select
              id='timeOptions'
              name='timeOptions'
              className='select select-bordered'
              value={timeOption}
              onChange={(event: ChangeEvent<HTMLSelectElement>) => {
                const timeOption = event.target.value;
                setTimeOption(timeOption);
                const time: string[] = timeOption.split('+');
                const [minute, second] = time;
                setModal((previousModal) => {
                  return {
                    ...previousModal,
                    topTime: parseFloat(minute),
                    topIncrement: parseFloat(second),
                    bottomTime: parseFloat(minute),
                    bottomIncrement: parseFloat(second),
                  };
                });
                setClock(({ current, running }) => {
                  return {
                    current,
                    running,
                    increment: {
                      top: parseFloat(second),
                      bottom: parseFloat(second),
                    },
                    milliseconds: {
                      top: parseFloat(minute) * 60 * 1000,
                      bottom: parseFloat(minute) * 60 * 1000,
                    },
                  };
                });
              }}>
              <option value='0.33+1'>20 sec | 1</option>
              <option value='0.5+0'>30 sec | 0</option>
              <option value='1+0'>1 | 0</option>
              <option value='1+1'>1 | 1</option>
              <option value='2+1'>2 | 1</option>
              <option value='3+0'>3 | 0</option>
              <option value='3+2'>3 | 2</option>
              <option value='5+0'>5 | 0</option>
              <option value='5+2'>5 | 2</option>
              <option value='5+5'>5 | 5</option>
              <option value='10+0'>10 | 0</option>
              <option value='10+5'>10 | 5</option>
              <option value='15+10'>15 | 10</option>
              <option value='20+0'>20 | 0</option>
              <option value='30+0'>30 | 0</option>
              <option value='60+0'>60 | 0</option>
            </select>
            <div className='join'>
              <select
                id='topTime'
                name='topTime'
                className='join-item select select-bordered w-full'
                value={modal.topTime}
                onChange={(event: ChangeEvent<HTMLSelectElement>) => {
                  const topTime = parseInt(event.target.value);
                  setModal((previousModal) => {
                    return { ...previousModal, topTime };
                  });
                  setClock(({ current, milliseconds, increment, running }) => {
                    return {
                      current,
                      running,
                      increment,
                      milliseconds: {
                        ...milliseconds,
                        top: topTime * 60 * 1000,
                      },
                    };
                  });
                }}>
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <select
                id='topIncrement'
                name='Top Increment'
                className='join-item select select-bordered w-full'
                value={modal.topIncrement}
                onChange={(event: ChangeEvent<HTMLSelectElement>) => {
                  const topIncrement = parseInt(event.target.value);
                  setModal((previousModal) => {
                    return { ...previousModal, topIncrement };
                  });
                  setClock(({ current, milliseconds, increment, running }) => {
                    return {
                      current,
                      running,
                      increment: {
                        ...increment,
                        top: topIncrement,
                      },
                      milliseconds,
                    };
                  });
                }}>
                <option value={0}>0</option>
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className='join'>
              <select
                id='bottomTime'
                name='Bottom Increment'
                className='join-item select select-bordered w-full'
                value={modal.bottomTime}
                onChange={(event: ChangeEvent<HTMLSelectElement>) => {
                  const bottomTime = parseInt(event.target.value);
                  setModal((previousModal) => {
                    return { ...previousModal, bottomTime };
                  });
                  setClock(({ current, milliseconds, increment, running }) => {
                    return {
                      current,
                      running,
                      increment,
                      milliseconds: {
                        ...milliseconds,
                        bottom: bottomTime * 60 * 1000,
                      },
                    };
                  });
                }}>
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <select
                id='bottomIncrement'
                name='Bottom Increment'
                className='join-item select select-bordered w-full'
                value={clock.increment.bottom}
                onChange={(event: ChangeEvent<HTMLSelectElement>) => {
                  const bottomIncrement = parseInt(event.target.value);
                  setModal((previousModal) => {
                    return { ...previousModal, bottomIncrement };
                  });
                  setClock(({ current, milliseconds, increment, running }) => {
                    return {
                      current,
                      running,
                      increment: {
                        ...increment,
                        bottom: bottomIncrement,
                      },
                      milliseconds,
                    };
                  });
                }}>
                <option value={0}>0</option>
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className='modal-action'>
            <form method='dialog'>
              {/* if there is a button in form, it will close the modal */}
              <button className='btn btn-primary w-full'>Set Clock</button>
            </form>
          </div>
        </div>
      </dialog>
    </AppLayout>
  );
};
