import KeyboardArrowLeftIcon from '@suid/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@suid/icons-material/KeyboardArrowRight';
import Button from '@suid/material/Button';
import FormControl from '@suid/material/FormControl';
import IconButton from '@suid/material/IconButton';
import InputLabel from '@suid/material/InputLabel';
import MenuItem from '@suid/material/MenuItem';
import Select from '@suid/material/Select';
import { Component, createSignal, For, mergeProps } from 'solid-js';
import { addZero } from '../../../utils/add-zero';
import CalendarEvent, {
  CalendarEventProps,
} from '../../molecules/CalendarEvent';

const months = [
  { short: 'Jan', long: 'January' },
  { short: 'Feb', long: 'February' },
  { short: 'Mar', long: 'March' },
  { short: 'Apr', long: 'April' },
  { short: 'May', long: 'May' },
  { short: 'Jun', long: 'June' },
  { short: 'Jul', long: 'July' },
  { short: 'Aug', long: 'August' },
  { short: 'Sep', long: 'September' },
  { short: 'Oct', long: 'October' },
  { short: 'Nov', long: 'November' },
  { short: 'Dec', long: 'December' },
];

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const daysByMonths: Record<number, number> = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};

const generateDaysInMonth = (month: number, year: number) => {
  const firstDateOfMonth = new Date(year, month - 1, 1);
  const firstDayOfMonth = firstDateOfMonth.getDay();
  // Previous Month
  const daysInMonth = Array.from(Array(firstDayOfMonth).keys()).map(
    (value: number, _index: number, array: number[]) => {
      const previousMonth = month === 1 ? 12 : month - 1;
      const previousYear = month === 1 ? year - 1 : year;
      const lastDayOfPreviousMonth = daysByMonths[previousMonth];
      const previousDate = lastDayOfPreviousMonth - array.length + value + 1;
      const day = new Date(
        previousYear,
        previousMonth - 1,
        previousDate
      ).getDay();
      return {
        day,
        date: previousDate,
        month: previousMonth,
        year: previousYear,
      };
    }
  );
  // Current Month
  for (let date = 1; date <= daysByMonths[month]; date++) {
    const day = new Date(year, month - 1, date).getDay();
    daysInMonth.push({ day, date, month, year });
  }
  // Next Month
  const lastDateOfMonth = new Date(year, month - 1, daysByMonths[month]);
  const lastDayOfInitMonth = lastDateOfMonth.getDay();
  if (lastDayOfInitMonth < 6) {
    const nextMonth = month === 12 ? 1 : month + 1;
    const nextYear = month === 12 ? year + 1 : year;
    for (let i = 0; i < 6 - lastDayOfInitMonth; i++) {
      const day = new Date(nextYear, nextMonth - 1, i + 1).getDay();
      daysInMonth.push({
        day,
        date: i + 1,
        month: nextMonth,
        year: nextYear,
      });
    }
  }
  return daysInMonth;
};

type MobileDayProps = {
  day: number;
  date: number;
  month: number;
  year: number;
};

const MobileDay: Component<MobileDayProps> = (props) => {
  return (
    <div class="flex items-center justify-between">
      <p>{days[props.day]}</p>
      <p>
        {addZero(props.date)}/{addZero(props.month)}/{props.year}
      </p>
    </div>
  );
};

type DayProps = {
  day: number;
  date: number;
  month: number;
  year: number;
  initDate: number;
  initMonth: number;
  initYear: number;
  currentMonth: number;
  currentYear: number;
};

const Day: Component<DayProps> = (props) => {
  if (
    props.date === props.initDate &&
    props.month === props.initMonth &&
    props.year === props.initYear
  ) {
    return (
      <div class="px-2 text-right font-bold">
        <div class="hidden md:block">{props.date}</div>
        <div class="block md:hidden">
          <MobileDay
            day={props.day}
            date={props.date}
            month={props.month}
            year={props.year}
          />
        </div>
      </div>
    );
  }

  if (props.year !== props.currentYear) {
    return (
      <div class="px-2 text-right text-black/50">
        <div class="hidden md:block">
          {props.date}/{props.month}/{props.year.toString().slice(2)}
        </div>
        <div class="block md:hidden">
          <MobileDay
            day={props.day}
            date={props.date}
            month={props.month}
            year={props.year}
          />
        </div>
      </div>
    );
  }

  if (props.month !== props.currentMonth) {
    return (
      <div class="px-2 text-right text-black/50">
        <div class="hidden md:block">
          {props.date}/{props.month}
        </div>
        <div class="block md:hidden">
          <MobileDay
            day={props.day}
            date={props.date}
            month={props.month}
            year={props.year}
          />
        </div>
      </div>
    );
  }

  return (
    <div class="px-2 text-right">
      <div class="hidden md:block">{props.date}</div>
      <div class="block md:hidden">
        <MobileDay
          day={props.day}
          date={props.date}
          month={props.month}
          year={props.year}
        />
      </div>
    </div>
  );
};

export type CalendarProps = { events?: CalendarEventProps[] };

export const Calendar: Component<CalendarProps> = (_props) => {
  const props = mergeProps({ events: [] }, _props);
  const d = new Date();
  const initDate = d.getDate();
  const initMonth = d.getMonth() + 1;
  const initYear = d.getFullYear();
  const initDaysInMonth = generateDaysInMonth(initMonth, initYear);

  const [month, setMonth] = createSignal(initMonth);
  const [year, setYear] = createSignal(initYear);
  const [daysInMonth, setDaysInMonth] = createSignal(initDaysInMonth);

  const changeMonth = (change: number) => {
    if (month() === 12 && change === 1) {
      setMonth(1);
      setYear(year() + 1);
    } else if (month() === 1 && change === -1) {
      setMonth(12);
      setYear(year() - 1);
    } else {
      setMonth(month() + change);
    }
    const newDaysInMonth = generateDaysInMonth(month(), year());
    setDaysInMonth(newDaysInMonth);
  };

  return (
    <>
      <div class="grid grid-cols-7">
        <div class="col-span-7">
          <div class="p-4">
            <div class="flex items-center justify-between">
              <FormControl>
                <InputLabel id="month-select-label">Month</InputLabel>
                <Select
                  labelId="month-select-label"
                  id="demo-simple-select"
                  value={month()}
                  label="Month"
                  onChange={(event) => {
                    setMonth(event.target.value);
                    const newDaysInMonth = generateDaysInMonth(
                      event.target.value,
                      year()
                    );
                    setDaysInMonth(newDaysInMonth);
                  }}
                  size="small">
                  <For each={months}>
                    {({ short, long }, index) => (
                      <MenuItem value={index() + 1}>
                        <span class="inline md:hidden">{short}</span>
                        <span class="hidden md:inline">{long}</span>
                      </MenuItem>
                    )}
                  </For>
                </Select>
              </FormControl>
              <div class="flex items-center">
                <IconButton
                  onClick={() => {
                    changeMonth(-1);
                  }}>
                  <KeyboardArrowLeftIcon />
                </IconButton>
                <p class="text-md font-bold md:text-xl">
                  <span>
                    {month() === initMonth && year() === initYear
                      ? addZero(initDate)
                      : addZero(1)}{' '}
                  </span>
                  <span class="inline md:hidden">
                    {months[month() - 1].short}{' '}
                  </span>
                  <span class="hidden md:inline">
                    {months[month() - 1].long}{' '}
                  </span>
                  <span>{year()}</span>
                </p>
                <IconButton
                  onClick={() => {
                    changeMonth(1);
                  }}>
                  <KeyboardArrowRightIcon />
                </IconButton>
              </div>
              <Button
                variant="contained"
                onClick={() => {
                  const initDaysInMonth = generateDaysInMonth(
                    initMonth,
                    initYear
                  );
                  setMonth(initMonth);
                  setYear(initYear);
                  setDaysInMonth(initDaysInMonth);
                }}>
                Today
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div class="hidden border-t md:block">
        <div class="grid grid-cols-7">
          <div class="col-span-1">
            <p class="p-4 text-center font-medium">Sunday</p>
          </div>
          <div class="col-span-1">
            <p class="p-4 text-center font-medium">Monday</p>
          </div>
          <div class="col-span-1">
            <p class="p-4 text-center font-medium">Tuesday</p>
          </div>
          <div class="col-span-1">
            <p class="p-4 text-center font-medium">Wednesday</p>
          </div>
          <div class="col-span-1">
            <p class="p-4 text-center font-medium">Thursday</p>
          </div>
          <div class="col-span-1">
            <p class="p-4 text-center font-medium">Friday</p>
          </div>
          <div class="col-span-1">
            <p class="p-4 text-center font-medium">Saturday</p>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-7">
        <For each={daysInMonth()}>
          {({ day, date: iDate, month: iMonth, year: iYear }) => {
            return (
              <div class="col-span-1 border-t">
                <div class="flex flex-col gap-2 px-2 py-4">
                  <Day
                    day={day}
                    date={iDate}
                    month={iMonth}
                    year={iYear}
                    initDate={initDate}
                    initMonth={initMonth}
                    initYear={initYear}
                    currentMonth={month()}
                    currentYear={year()}
                  />
                  <For each={props.events}>
                    {(props: CalendarEventProps) => {
                      return (
                        <CalendarEvent
                          type={props.type}
                          date={props.date}
                          month={props.month}
                          year={props.year}
                          iDate={iDate}
                          iMonth={iMonth}
                          iYear={iYear}
                          description={props.description}
                        />
                      );
                    }}
                  </For>
                </div>
              </div>
            );
          }}
        </For>
      </div>
    </>
  );
};

export default Calendar;
