import { Player } from '@prisma/client';

export type TitledStats = {
  averageRapidRating: number;
  maxRapidRating: number;
  averageBlitzRating: number;
  maxBlitzRating: number;
  averageBulletRating: number;
  maxBulletRating: number;
  total: number;
  players: Player[];
};
