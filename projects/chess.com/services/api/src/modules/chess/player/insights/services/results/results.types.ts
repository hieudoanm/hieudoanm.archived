export type Results = {
  win: Result[];
  draw: Result[];
  loss: Result[];
  timeOfDays: ResultsByTimeOfDay[];
  daysOfWeek: ResultsByDayOfWeek[];
};

export type Result = {
  result: string;
  count: number;
};

export type ResultsByTimeOfDay = {
  win: number;
  draw: number;
  loss: number;
  timeOfDay: string;
};

export type ResultsByDayOfWeek = {
  win: number;
  draw: number;
  loss: number;
  dayOfWeek: string;
};
