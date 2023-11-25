import { Player } from '@prisma/client';

export type StreamersResponse = {
  total: number;
  players: Player[];
  countries: { countryCode: string; country: string; }[];
};
