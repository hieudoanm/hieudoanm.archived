import { Component, mergeProps } from 'solid-js';

export type CalendarEventProps = {
  type?: string;
  date?: number;
  month?: number;
  year?: number;
  iDate?: number;
  iMonth?: number;
  iYear?: number;
  title?: string;
  description?: string;
};

export const CalendarEvent: Component<CalendarEventProps> = (_props) => {
  const props = mergeProps({ description: '' }, _props);
  console.log(props.type, props.date, props.iDate, props.month, props.iMonth);

  if (
    (props.type === 'yearly'
      && props.month === props.iMonth
      && props.date === props.iDate)
    || (props.year === props.iYear
      && props.month === props.iMonth
      && props.date === props.iDate)
  ) {
    return (
      <div
        class="flex cursor-pointer items-center gap-2 truncate rounded bg-blue-500 p-2 text-white"
        onClick={() => {
          console.log(props.description);
        }}
      >
        <div class="h-4 w-4 rounded-full bg-white" />
        <div class="text-sm">{props.description}</div>
      </div>
    );
  }

  return <></>;
};

export default CalendarEvent;
