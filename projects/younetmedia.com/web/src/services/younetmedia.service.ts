import { logger } from '@younetmedia/common/libs/log';
import { Result } from '@younetmedia/types';
import axios from 'axios';

export const queryResult = async (
  topicId: number,
  timeRange: { fromDate: string; toDate: string },
  query: string
): Promise<Result> => {
  const dashboard: number = 16_089;
  const authorization: string = sessionStorage.getItem('accessToken') || '';
  const [fromYear, fromMonth, fromDate] = timeRange.fromDate.split('-');
  const [toYear, toMonth, toDate] = timeRange.toDate.split('-');
  const url = `https://api.younetmedia.com/batch?topic_id=${topicId}%2C${topicId}&service=mentions-statistics`;
  const dateFrom = new Date(
    Date.UTC(
      Number.parseInt(fromYear, 10),
      Number.parseInt(fromMonth, 10) - 1,
      Number.parseInt(fromDate, 10),
      0,
      0,
      0
    )
  );
  const date_from = new Date(
    dateFrom.getTime() - 7 * 60 * 60 * 1000
  ).toISOString();
  const dateTo = new Date(
    Date.UTC(
      Number.parseInt(toYear, 10),
      Number.parseInt(toMonth, 10) - 1,
      Number.parseInt(toDate),
      23,
      59,
      59
    )
  );
  const date_to = new Date(dateTo.getTime() - 7 * 60 * 60 * 1000).toISOString();
  const batchData = {
    batch: [
      {
        service: 'topics/:topic_id/:service',
        method: 'find',
        params: {
          route: {
            topic_id: topicId,
            service: 'mentions-statistics'
          },
          query: {
            $select: [
              'id',
              'created_date',
              'last_activity',
              'mention_type',
              'platform',
              'search_text',
              'title',
              'short_content',
              'only_short',
              'story',
              'name',
              'caption',
              'description',
              'author',
              'identity_name',
              'identity',
              'source_name',
              'source_type',
              'attachment',
              'link',
              'id_source',
              'tags',
              'likes',
              'shares',
              'id_reference',
              'rating_score',
              'sentiment',
              'sentiment_comments'
            ],
            $noise_filter_mode: 'EXCLUDE_NOISE_SPAM',
            $source_group_not_in: 'off',
            $dashboard: dashboard,
            $search: query,
            $date_from: date_from,
            $date_to: date_to,
            $params: { cursorMark: '*' },
            $sort: { last_activity: -1, id: -1 },
            is_ignore: { $ne: 1 },
            is_relevance: { $ne: 0 }
          }
        }
      },
      {
        service: 'topics/:topic_id/:service',
        method: 'find',
        params: {
          route: {
            topic_id: topicId,
            service: 'mentions-statistics'
          },
          query: {
            $select: [
              'id',
              'created_date',
              'last_activity',
              'mention_type',
              'platform',
              'search_text',
              'title',
              'short_content',
              'only_short',
              'story',
              'name',
              'caption',
              'description',
              'author',
              'identity_name',
              'identity',
              'source_name',
              'source_type',
              'attachment',
              'link',
              'id_source',
              'tags',
              'likes',
              'shares',
              'id_reference',
              'rating_score',
              'sentiment',
              'sentiment_comments'
            ],
            $noise_filter_mode: 'EXCLUDE_NOISE_SPAM',
            $source_group_not_in: 'off',
            $dashboard: dashboard,
            $search: query,
            $date_from: `${fromDate}T00:00:00Z`,
            $date_to: `${toDate}T23:59:59Z`,
            $params: { cursorMark: '*' },
            $sort: { last_activity: -1, id: -1 },
            is_ignore: { $ne: 1 },
            is_relevance: { $ne: 0 }
          }
        }
      }
    ]
  };
  try {
    const { data = [] } = await axios.post<
      { total_mentions: number; total_collectable_mentions: number }[]
    >(url, batchData, { headers: { Authorization: authorization } });
    return {
      query,
      total_mentions: data[0].total_mentions || -1,
      total_collectable_mentions: data[0].total_collectable_mentions || -1
    };
  } catch (error) {
    logger.error(error);
    return {
      query,
      total_mentions: -1,
      total_collectable_mentions: -1
    };
  }
};
