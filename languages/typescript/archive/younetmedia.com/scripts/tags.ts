import axios from 'axios';
import dotenv from 'dotenv';
import { readFileSync } from 'node:fs';
import { chunk } from 'lodash';

dotenv.config();

const AUTHORIZATION = process.env.AUTHORIZATION ?? '';
const COOKIE = process.env.COOKIE ?? '';

const headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
  Cookie: COOKIE,
};

const BASE: string = 'https://admin.younetmedia.com/system/content-moderator';

type YouNetResponse = {
  success: boolean;
};

const changeSentimentAllMentions = async (ids: string[]) => {
  const url = `${BASE}/change-sentiment-all-mentions`;
  const formData = `id_mention=&is_comments_view=&number_of_rows=200&group_mode=2&sort_by=1&page=1&id_topic=101256&daterange=2023%2F11%2F26-+2023%2F12%2F26&filter_rating_score_operator=&mention_type=&filter_sources=&filter_creator=&search_phrase=id%3A(${ids.join(
    '+'
  )})&filter_noisy=0&filter_relevance=1&filter_approved=&status=1&filter_confidential_operator=&manually_checked=&is_sample=&cursor_mark=*&new_sentiment=1`;
  const response = await axios.post<YouNetResponse>(url, formData, { headers });
  const { data } = response;
  console.log(data.success);
  return data;
};

const marNotSpamAllMentions = async (ids: string[]) => {
  const url = `${BASE}/mark-not-spam-all-mentions`;
  const formData = `id_mention=&is_comments_view=&number_of_rows=200&group_mode=2&sort_by=1&page=1&id_topic=101256&daterange=2023%2F11%2F26-+2023%2F12%2F26&filter_rating_score_operator=&mention_type=&filter_sources=&filter_creator=&search_phrase=id%3A(${ids.join(
    '+'
  )})&filter_noisy=0&filter_relevance=1&filter_approved=&status=1&filter_confidential_operator=&manually_checked=&is_sample=&cursor_mark=*`;
  const response = await axios.post<YouNetResponse>(url, formData, { headers });
  const { data } = response;
  console.log(data.success);
  return data;
};

const setTagAllMentions = async (
  ids: string[],
  tagId: string,
  tagName: string
) => {
  const url = `${BASE}/set-tag-all-mentions`;
  const formData = `id_mention=&is_comments_view=&number_of_rows=200&group_mode=2&sort_by=1&page=1&id_topic=101256&daterange=2023%2F11%2F26-+2023%2F12%2F26&filter_rating_score_operator=&mention_type=&filter_sources=&filter_creator=&search_phrase=id%3A(${ids.join(
    '+'
  )})&filter_noisy=0&filter_relevance=1&filter_approved=&status=1&filter_confidential_operator=&manually_checked=&is_sample=&extra_id_tag=${tagId}&extra_tag_name=${tagName}&extra_type=TAG&extra_method=set&cursor_mark=*`;
  const response = await axios.post<YouNetResponse>(url, formData, { headers });
  const { data } = response;
  console.log(data.success);
  return data;
};

const main = async () => {
  const idsTxt = readFileSync('./data/ids/bike.txt', 'utf8');
  const ids = idsTxt.split('\n');
  for (const chunkIds of chunk(ids, 1000)) {
    console.log('chunkIds', chunkIds);
    await changeSentimentAllMentions(chunkIds);
    await marNotSpamAllMentions(chunkIds);
    await setTagAllMentions(chunkIds, '544564', 'Taxi');
    await setTagAllMentions(chunkIds, '462504', 'Paid');
  }
};

main();
