import axios from 'axios';
import { readFileSync, writeFileSync } from 'fs';

const KEY = process.env.KEY ?? 'F973A34CB306B1AF88E26AEFD24FD33B';

const writeCSV = (infos: any[]) => {
  const headers: string[] = ['ip', 'city_name', 'region_name', 'country_name'];
  const headerRow: string = `${headers.join(',')}`;
  const dataRows: string = infos
    .map((result: any) => {
      const cells = headers
        .map((header: string) => {
          if (header === 'query') {
            return `"${(result[header] || '')
              .replace(/"/g, "'")
              .replace(/#/g, '')}"`;
          }
          return result[header];
        })
        .join(',');
      return cells;
    })
    .join('\n');
  const csv: string = `${headerRow}\n${dataRows}`;
  writeFileSync('./data/ips.csv', csv);
};

const main = async () => {
  const ipsString: string = readFileSync('./data/ips.txt', 'utf-8');
  const ips: string[] = ipsString.split('\n');
  const infos = [];
  for (const ip of ips) {
    const url = `https://api.ip2location.io/?key=${KEY}&ip=${ip}`;
    const response = await axios.get(url);
    const { data = {} } = response;
    const { city_name, region_name, country_name } = data;
    infos.push({ ip, city_name, region_name, country_name });
    writeCSV(infos);
  }
};

main().catch(console.error);
