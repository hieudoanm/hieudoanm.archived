import { Player, PrismaClient } from '@prisma/client';
import { writeFileSync } from 'node:fs';
import { jsonToCsv } from '../../../../src/utils/json-to-csv';

const prismaClient = new PrismaClient();

const main = async () => {
  const players: Player[] = await prismaClient.player.findMany();
  const csv = jsonToCsv(players, { delimiter: ',', quote: "'" });
  writeFileSync('./players.csv', csv);
};

main().catch(console.error);
