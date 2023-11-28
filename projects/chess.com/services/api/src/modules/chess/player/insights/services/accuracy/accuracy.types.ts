export type Accuracy = {
  average: number;
  win: number;
  draw: number;
  loss: number;
  periods: AccuracyByPeriod[];
  timeOfDays: AccuracyByTimeOfDay[];
  daysOfWeek: AccuracyByDayOfWeek[];
};

export type AccuracyByPeriod = { average: number; period: number };
export type AccuracyByTimeOfDay = { average: number; timeOfDay: string };
export type AccuracyByDayOfWeek = { average: number; dayOfWeek: string };
