import { NextPage } from "next";
import { FC, useEffect, useState } from "react";

const addZero = (number: number) =>
  number > 9 ? number.toString() : `0${number}`;

const getOrdinalSuffix = (weekday: number): string => {
  const j = weekday % 10;
  const k = weekday % 100;

  if (j === 1 && k !== 11) {
    return "st";
  }
  if (j === 2 && k !== 12) {
    return "nd";
  }
  if (j === 3 && k !== 13) {
    return "rd";
  }
  return "th";
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const TimeZoneClock: FC<{
  year: number;
  month: number;
  date: number;
  hours: number;
  minutes: number;
  seconds: number;
  timezone: number;
}> = ({
  year = 0,
  month = 0,
  date = 0,
  hours = 0,
  minutes = 0,
  seconds = 0,
  timezone: currentTimeZone = 0,
}) => {
  const timeZones: { city: string; timeZone: number }[] = [
    { city: "London", timeZone: 0 },
    { city: "Hanoi", timeZone: 7 },
    { city: "Melbourne", timeZone: 11 },
  ];
  return (
    <div className="w-72 aspect-square bg-black rounded-3xl shadow-3xl p-8 border border-white">
      <div className="w-full h-full grid grid-rows-3">
        {timeZones.map(({ city, timeZone }, index: number, array) => {
          const last = array.length - 1 === index;
          const d = new Date(
            year,
            month,
            date,
            hours - (currentTimeZone - timeZone),
            minutes,
            seconds,
          );
          const timeZoneHours: number = d.getHours();
          const timeZoneMinutes: number = d.getMinutes();
          return (
            <div
              key={city}
              className={`col-span-1 text-white ${!last ? "border-b border-gray-500" : ""}`}
            >
              <div className="w-full h-full flex items-center justify-between">
                <div>
                  <p className="text-gray-500 uppercase text-sm">
                    +{addZero(timeZone)}Hrs
                  </p>
                  <p className="text-base font-semibold truncate whitespace-nowrap">
                    {city}
                  </p>
                </div>
                <p className="text-3xl font-bold">
                  {addZero(timeZoneHours)}:{addZero(timeZoneMinutes)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const DigitalClock: FC<{
  year: number;
  month: number;
  date: number;
  weekday: number;
  hours: number;
  minutes: number;
  seconds: number;
}> = ({
  year = 0,
  month = 0,
  date = 0,
  weekday = 0,
  seconds = 0,
  minutes = 0,
  hours = 0,
}) => {
  return (
    <div className="w-72 aspect-square bg-black rounded-3xl shadow-3xl p-8 border border-white">
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-white flex flex-col items-center justify-center gap-y-2">
          <p className="text-sm">
            <span className="uppercase">{months[month]}</span> {date}
            <sup>{getOrdinalSuffix(date)}</sup>, {year}
          </p>
          <p className="text-5xl uppercase">
            {addZero(hours)}:{addZero(minutes)}:{addZero(seconds)}
          </p>
          <p className="text-sm uppercase">{weekdays[weekday]}</p>
        </div>
      </div>
    </div>
  );
};

const AnalogClock: FC<{ seconds: number; minutes: number; hours: number }> = ({
  seconds = 0,
  minutes = 0,
  hours = 0,
}) => {
  const secondsAngle = (seconds < 60 ? (seconds / 60) * 360 : 0) + 90;
  const minutesAngle = (minutes < 60 ? (minutes / 60) * 360 : 0) + 90;
  const hoursAngle = (minutes < 24 ? (hours / 24) * 360 : 0) + 90;

  return (
    <div className="w-72 aspect-square bg-black rounded-full shadow-3xl border border-white">
      <div className="w-full h-full rounded-full relative">
        <div className="w-4 aspect-square bg-white rounded-full absolute top-0 left-0 right-0 bottom-0 m-auto">
          <div className="w-full h-full relative">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
              (index) => {
                const angle = 22.5 * index;
                const mainPoint =
                  angle % 90 === 0 ? (
                    <div className="w-4 aspect-square bg-white rounded-full" />
                  ) : (
                    <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                  );
                return (
                  <div
                    key={angle}
                    className="w-full h-full absolute"
                    style={{ rotate: `${angle}deg` }}
                  >
                    <div className="h-4 w-28 bg-transparent absolute top-0 bottom-0 right-2 my-auto flex justify-start items-center">
                      {mainPoint}
                    </div>
                  </div>
                );
              },
            )}
            <div
              className="w-full h-full absolute z-10 transition-all ease-linear"
              style={{ rotate: `${secondsAngle}deg` }}
            >
              <div className="h-1 w-24 bg-red-700 absolute top-0 bottom-0 right-2 my-auto rounded-full"></div>
            </div>
            <div
              className="w-full h-full absolute transition-all"
              style={{ rotate: `${minutesAngle}deg` }}
            >
              <div className="h-2 w-20 bg-white absolute top-0 bottom-0 right-2 my-auto rounded-full"></div>
            </div>
            <div
              className="w-full h-full absolute transition-all"
              style={{ rotate: `${hoursAngle}deg` }}
            >
              <div className="h-2 w-16 bg-white absolute top-0 bottom-0 right-2 my-auto rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomePage: NextPage = () => {
  const d = new Date();
  const [clock, setClock] = useState<{
    year: number;
    month: number;
    date: number;
    weekday: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
    timezone: number;
  }>({
    year: d.getFullYear(),
    month: d.getMonth(),
    date: d.getDate(),
    weekday: d.getDay(),
    hours: d.getHours(),
    minutes: d.getMinutes(),
    seconds: d.getSeconds(),
    milliseconds: d.getMilliseconds(),
    timezone: d.getTimezoneOffset() / -60,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const d: Date = new Date();
      setClock({
        year: d.getFullYear(),
        month: d.getMonth(),
        date: d.getDate(),
        weekday: d.getDay(),
        hours: d.getHours(),
        minutes: d.getMinutes(),
        seconds: d.getSeconds(),
        milliseconds: d.getMilliseconds(),
        timezone: d.getTimezoneOffset() / -60,
      });
    }, 1);

    return () => clearInterval(interval);
  });

  return (
    <div className="w-screen h-triple-screen md:h-screen overflow-hidden bg-gray-300">
      <div className="grid grid-rows-3 md:grid-rows-none grid-cols-none md:grid-cols-3 h-full gap-8 p-8">
        <div className="col-span-1 h-full">
          <div className="flex items-center justify-center h-full">
            <AnalogClock
              hours={clock.hours}
              minutes={clock.minutes}
              seconds={clock.seconds}
            />
          </div>
        </div>
        <div className="col-span-1 h-full">
          <div className="flex items-center justify-center h-full">
            <DigitalClock
              year={clock.year}
              month={clock.month}
              date={clock.date}
              weekday={clock.weekday}
              hours={clock.hours}
              minutes={clock.minutes}
              seconds={clock.seconds}
            />
          </div>
        </div>
        <div className="col-span-1 h-full">
          <div className="flex items-center justify-center h-full">
            <TimeZoneClock
              year={clock.year}
              month={clock.month}
              date={clock.date}
              hours={clock.hours}
              minutes={clock.minutes}
              seconds={clock.seconds}
              timezone={clock.timezone}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
