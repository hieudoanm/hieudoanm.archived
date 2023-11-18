import { Opening } from '@prisma/client';
import axios from 'axios';
import csv from 'csvtojson';
import { writeFileSync } from 'fs';

const main = async () => {
  let openings: Opening[] = [];
  for (const letter of ['a', 'b', 'c', 'd', 'e']) {
    console.log('letter', letter);
    const url = `https://raw.githubusercontent.com/lichess-org/chess-openings/master/${letter}.tsv`;
    const { data } = await axios.get<string>(url);
    const letterOpenings: Opening[] = await csv({ delimiter: '\t' }).fromString(
      data
    );
    openings = [...openings, ...letterOpenings];
  }
  writeFileSync('./src/json/openings.json', JSON.stringify(openings, null, 2));
};

main();
