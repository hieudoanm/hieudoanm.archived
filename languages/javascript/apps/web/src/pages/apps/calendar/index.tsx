import { Calendar } from '@web/components/Calendar';
import { AppLayout } from '@web/layout/AppLayout';
import React from 'react';

export type CalendarPageProperties = {
  date: number;
  month: number;
  year: number;
};

const d = new Date();

export const CalendarPage: React.FC<CalendarPageProperties> = ({
  date = d.getDate(),
  month = d.getMonth(),
  year = d.getFullYear(),
}) => {
  return (
    <AppLayout nav full>
      <div className='container mx-auto h-full'>
        <div className='h-full p-4 md:p-8'>
          <div className='flex h-full items-center justify-center'>
            <Calendar date={date} month={month} year={year} />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default CalendarPage;
