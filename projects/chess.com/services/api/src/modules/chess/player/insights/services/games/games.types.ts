export type Games = {
  total: number;
  win: number;
  draw: number;
  loss: number;
  periods: GamesByPeriod[];
  timeOfDays: GamesByTimeOfDay[];
  daysOfWeek: GamesByDayOfWeek[];
};

export type GamesByPeriod = { games: number; period: number };
export type GamesByTimeOfDay = { games: number; timeOfDay: string };
export type GamesByDayOfWeek = { games: number; dayOfWeek: string };
