import {
  ONE_MONTH,
  ONE_QUARTER,
  ONE_WEEK,
  ONE_YEAR,
} from '../../common/constants';

export type TimeRange = 'WEEK' | 'MONTH' | 'QUARTER' | 'YEAR';

export const timeRangeInMilliseconds: Record<TimeRange, number> = {
  WEEK: ONE_WEEK,
  MONTH: ONE_MONTH,
  QUARTER: ONE_QUARTER,
  YEAR: ONE_YEAR,
};

export const timeRangeInDays: Record<TimeRange, number> = {
  WEEK: 7,
  MONTH: 30,
  QUARTER: 90,
  YEAR: 365,
};
