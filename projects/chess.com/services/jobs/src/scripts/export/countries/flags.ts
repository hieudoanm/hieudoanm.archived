import axios from 'axios';
import { writeFileSync } from 'node:fs';

const main = async () => {
  const url = 'https://restcountries.com/v3.1/all?fields=cca2,flag';
  const { data } = await axios.get<{ cca2: string; flag: string; }[]>(url);
  data.sort((a, b) => (a.cca2 > b.cca2 ? 1 : -1));
  const flags: Record<string, string> = {};
  for (const { cca2, flag } of data) {
    flags[`${cca2}`] = flag;
  }
  writeFileSync('./src/json/flags.json', JSON.stringify(flags, undefined, 2));
};

main();
