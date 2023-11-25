import { Player, Title } from '@prisma/client';

export type CountryTotal = {
  countryCode: string;
  country: string;
  total: number;
};

export type Titled = {
  averageRapidRating: number;
  averageBlitzRating: number;
  averageBulletRating: number;
  maxRapidRating: number;
  maxBlitzRating: number;
  maxBulletRating: number;
  total: number;
  players: Player[];
};

export type Country = {
  averageRapidRating: number;
  averageBlitzRating: number;
  averageBulletRating: number;
  maxRapidRating: number;
  maxBlitzRating: number;
  maxBulletRating: number;
  total: number;
  players: Player[];
  titles: Title[];
};

export type GamesSynced = { total: number; synced: number; existed: number; };
