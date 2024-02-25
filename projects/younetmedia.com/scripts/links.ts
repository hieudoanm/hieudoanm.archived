import { Parser } from '@json2csv/plainjs';
import axios from 'axios';
import csv from 'csvtojson';
import dotenv from 'dotenv';
import { writeFileSync } from 'node:fs';
import chunk from 'lodash/chunk';

dotenv.config();

const AUTHORIZATION = process.env.AUTHORIZATION ?? '';
const TOPIC_ID = process.env.TOPIC_ID ?? '101256';

const headers = { Authorization: AUTHORIZATION };

const BASE = 'https://st-api.younetmedia.com/api';

export type Link = { link: string; system_id: string; main_link: string };

const getMainLink = async (url: string) => {
  const response = await axios.get(url);
  const { headers } = response;
  const link: string = headers['link'] ?? '';
  const start = link.indexOf('<');
  const end = link.indexOf('>');
  return start > -1 && end > -1 ? link.slice(start + 1, end) : '';
};

const addUrls = async (urls: string[], action_type: number) => {
  try {
    const url = `${BASE}/crawler/add-urls`;
    const batch = urls.map((url) => {
      const [main] = url.split('?');
      const parts = main.split('/');
      const groupsIndex = parts.indexOf('groups');
      const id_source = groupsIndex === -1 ? '' : parts[groupsIndex + 1];
      const postsIndex = parts.indexOf('posts');
      const permalinkIndex = parts.indexOf('permalink');
      let id_social = '';
      if (postsIndex !== -1) {
        id_social = parts[postsIndex + 1];
      } else if (permalinkIndex !== -1) {
        id_social = parts[permalinkIndex + 1];
      }
      return {
        mention_id: '',
        link: url,
        platform: 1,
        action_type: action_type,
        id_social,
        source_type: 0,
        title: '',
        topic_id: TOPIC_ID,
        id_source,
        created_date: '',
        application: 'support-tool',
        creator: 922,
      };
    });
    const response = await axios.post<{ link: string; system_id: string }[]>(
      url,
      {
        batch: batch,
        creator: {
          status: '',
          fullname: 'Lê Huỳnh Trường Giang',
          id_account: 9,
          realm: undefined,
          username: undefined,
          email: 'giang.le@buzzmetrics.com',
          emailVerified: undefined,
          id: 922,
        },
      },
      { headers }
    );
    const { data } = response;
    console.info(data);
  } catch (error) {
    console.error(error);
  }
};

const main = async () => {
  const file = './data/links/xanh.csv';
  const links: Link[] = await csv().fromFile(file);
  const linksMap = new Map<string, string>();
  for (const { link, system_id = '' } of links) {
    linksMap.set(link, system_id);
  }
  const url = `${BASE}/mentions/trace`;
  const parser = new Parser({ fields: ['system_id', 'link', 'main_link'] });
  const shareLinks = new Map<string, string>();
  const succesfulShareLinks = new Map<string, string>();
  for (const chunkItem of chunk([...linksMap.entries()], 100)) {
    const data = chunkItem
      // .filter(([_, value]) => value === '')
      .map(([link]) => link);
    for (let index = 0; index < data.length; index++) {
      const shareLink = data[index];
      if (shareLink.includes('share')) {
        console.log(shareLink);
        const mainLink = await getMainLink(shareLink);
        if (mainLink.length > 0) {
          shareLinks.set(mainLink, shareLink);
          data[index] = mainLink;
        }
      }
    }
    console.info(chunkItem.length);
    try {
      console.info('Loading');
      const response = await axios.post<
        { link: string; system_id: string; existed_in_topic: boolean }[]
      >(
        url,
        {
          data,
          date_from: '2024-01-24T00:00:00+07:00',
          date_to: '2024-02-24T00:00:00+07:00',
          topic_id: TOPIC_ID,
        },
        { headers }
      );
      console.info('Done');
      const { data: results = [] } = response;
      // const unsuccessful = results
      // .filter(({ system_id }) => system_id === '')
      // .map(({ link }) => link);
      console.info('Loading');
      // console.info('Start Add URLs');
      // await addUrls(unsuccessful, 0);
      // await addUrls(unsuccessful, 1);
      // console.info('Complete Add URLs');
      for (const result of results) {
        const {
          existed_in_topic,
          link: resultLink = '',
          system_id = '',
        } = result;
        let csvLink: string = resultLink;
        let mainLink: string = '';
        if (shareLinks.has(resultLink)) {
          csvLink = shareLinks.get(resultLink)!;
          mainLink = resultLink;
          succesfulShareLinks.set(csvLink, mainLink);
        }
        console.info(
          `csvLink=${csvLink} system_id=${system_id} main_link=${
            succesfulShareLinks.get(csvLink) ?? ''
          }`
        );
        if (linksMap.has(csvLink) && existed_in_topic) {
          linksMap.set(csvLink, system_id);
        }
      }
      const list: Link[] = [];
      for (const [link, system_id] of linksMap.entries()) {
        list.push({
          system_id,
          link,
          main_link: succesfulShareLinks.get(link) ?? '',
        });
      }
      const csv = parser.parse(list);
      writeFileSync(file, csv);
    } catch (error) {
      console.error(error);
    }
  }
};

main();
