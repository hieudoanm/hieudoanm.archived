import axios from 'axios';
import csv from 'csvtojson';
import dotenv from 'dotenv';
import { Parser } from '@json2csv/plainjs';
import { writeFileSync } from 'fs';

dotenv.config();

const AUTHORIZATION = process.env.AUTHORIZATION ?? '';

const headers = {
  Authorization: AUTHORIZATION,
};

export type Link = { link: string; system_id: string };

const main = async () => {
  const file = './data/links/links.csv';
  const links: Link[] = await csv().fromFile(file);
  const linksMap = new Map<string, string>();
  for (const { link, system_id = '' } of links) {
    linksMap.set(link, system_id);
  }
  const url = 'https://st-api.younetmedia.com/api/mentions/trace';
  const parser = new Parser({ fields: ['system_id', 'link'] });
  for (const [key, _value] of linksMap.entries()) {
    if (_value) continue;
    try {
      const response = await axios.post(
        url,
        {
          data: [key],
          date_from: '2023-11-28T00:00:00+07:00',
          date_to: '2023-12-28T00:00:00+07:00',
          topic_id: '101256',
        },
        { headers }
      );
      const { data = [] } = response;
      const [{ link = '', system_id = '' }] = data;
      console.info(`link=${link} system_id=${system_id}`);
      linksMap.set(link, system_id);
      const list: Link[] = [];
      linksMap.forEach((value, key) => {
        list.push({ system_id: value, link: key });
      });
      const csv = parser.parse(list);
      writeFileSync(file, csv);
    } catch (error) {
      console.error(error);
    }
  }
  process.exit(0);
};

main().catch(console.error);
