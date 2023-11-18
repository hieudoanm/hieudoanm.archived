import type { Accuracy } from './services/accuracy/accuracy.types';
import type { Games } from './services/games/games.types';
import { Opponent } from './services/opponents/opponents.types';
import type { Results } from './services/results/results.types';

export type Insights = {
  username: string;
  games: Games;
  accuracy: Accuracy;
  results: Results;
  opponents: Opponent[];
};
