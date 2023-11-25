import { Player } from '@prisma/client';

export type CountryCount = {
  countryCode: string;
  country: string;
  total: string;
};

export type CountriesResponse = {
  averageRapidRating: number;
  averageBlitzRating: number;
  averageBulletRating: number;
  maxRapidRating: number;
  maxBlitzRating: number;
  maxBulletRating: number;
  total: number;
  players: Player[];
  titles: { title: string; total: number; }[];
};
