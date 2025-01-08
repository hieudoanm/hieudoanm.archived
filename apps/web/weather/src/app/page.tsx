"use client";

import { useGeolocation } from "@weather/hooks/use-geolocation";
import { NextPage } from "next";
import { FC } from "react";
import {
  FaBoltLightning,
  FaCloud,
  FaCloudRain,
  FaCloudShowersHeavy,
  FaCloudSunRain,
  FaSnowflake,
  FaSun,
  FaWind,
} from "react-icons/fa6";

const weekdays: string[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months: string[] = [
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

const getDaySuffix = (date: number): string => {
  if (date >= 11 && date <= 13) {
    return "th";
  }
  switch (date % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

const colors = [
  "bg-red-500",
  "bg-orange-500",
  "bg-blue-500",
  "bg-sky-500",
  "bg-lime-500",
  "bg-teal-500",
];

const Icon: FC<{ description: string }> = ({ description = "" }) => {
  if (description === "sunny") return <FaSun />;
  if (description === "cloudy") return <FaCloud />;
  if (description === "rain") return <FaCloudShowersHeavy />;
  if (description === "snow") return <FaSnowflake />;
  if (description === "drizzle") return <FaCloudRain />;
  if (description === "windy") return <FaWind />;
  if (description === "thunderstorm") return <FaBoltLightning />;
  return <></>;
};

// Example usage
const day = 23; // Change this to test with other numbers
console.log(`${day}${getDaySuffix(day)}`); // Output: 23rd

const HomePage: NextPage = () => {
  const { latitude, longitude } = useGeolocation();
  console.log({ latitude, longitude });

  const response = {
    city: "Ho Chi Minh City",
    country: "Vietnam",
    temperature: 30,
    description: "windy",
    days: [
      { weekday: "Mon", temperature: 30, description: "sunny" },
      { weekday: "Tue", temperature: 30, description: "cloudy" },
      { weekday: "Wed", temperature: 30, description: "rain" },
      { weekday: "Thu", temperature: 30, description: "snow" },
      { weekday: "Fri", temperature: 30, description: "drizzle" },
      { weekday: "Sat", temperature: 30, description: "thunderstorm" },
    ],
  };
  const {
    city = "",
    country = "",
    description = "",
    temperature = 0,
    days = [],
  } = response;
  const d = new Date();
  const [dateString] = d.toISOString().split("T");
  const weekday = d.getDay();
  const [year, month, date] = dateString.split("-");

  return (
    <div className="w-screen h-screen bg-white">
      <div className="mx-auto w-full h-full max-w-sm border-0 md:border">
        <div className="h-full flex flex-col">
          <div className="pt-8 text-center">
            <div className="flex flex-col gap-y-1 md:gap-y-2">
              <div className="hidden md:flex items-center justify-center gap-x-2">
                <FaCloudSunRain />
                <span className="capitalize font-bold">Weather</span>
              </div>
              <p className="text-2xl font-black capitalize">
                <span>{city}</span>
                <span className="hidden md:inline">, {country}</span>
              </p>
              <p>
                <span>
                  {weekdays[weekday]}, {months[parseInt(month, 10) + 1]}{" "}
                  {parseInt(date, 10)}
                </span>
                <sup>{getDaySuffix(parseInt(date, 10))}</sup>
                <span className="hidden md:inline">, {year}</span>
              </p>
              <div className="flex items-center justify-center gap-x-2">
                <Icon description={description} />
                <span className="capitalize font-bold">{description}</span>
              </div>
            </div>
          </div>
          <div className="grow">
            <div className="flex items-center justify-center h-full">
              <p className="text-center text-[192px]">{temperature}°</p>
            </div>
          </div>
          <div className="grid grid-cols-6 border-t">
            {days.map(
              (
                { weekday, temperature = 0, description = "" },
                index: number,
              ) => {
                const color: string = colors[index % colors.length];
                return (
                  <div
                    key={weekday}
                    className={`col-span-1 text-white ${color}`}
                  >
                    <div className="flex flex-col gap-y-1 md:gap-y-2 py-2 md:py-4 items-center">
                      <p>{weekday}</p>
                      <p className="text-xl">
                        <Icon description={description} />
                      </p>
                      <p className="font-black">{temperature}°</p>
                    </div>
                  </div>
                );
              },
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
