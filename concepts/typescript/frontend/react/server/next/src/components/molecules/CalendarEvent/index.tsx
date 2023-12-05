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

export const CalendarEvent: React.FC<CalendarEventProps> = ({
  type,
  date,
  month,
  year,
  iDate,
  iMonth,
  iYear,
  description = ''
}) => {
  if (
    (type === 'yearly' && month === iMonth && date === iDate)
    || (year === iYear && month === iMonth && date === iDate)
  ) {
    return (
      <div
        className="flex cursor-pointer items-center gap-2 truncate rounded bg-blue-500 p-2 text-white"
        onClick={() => {}}
      >
        <div className="h-4 w-4 rounded-full bg-white"></div>
        <div className="text-sm">{description}</div>
      </div>
    );
  }

  return <></>;
};

export default CalendarEvent;
