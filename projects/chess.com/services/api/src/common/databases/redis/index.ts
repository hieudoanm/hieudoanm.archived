import Redis from 'ioredis';
import { logger } from '../../libs/log';
import { jsonParse } from '../../utils/json-parse';

export class RedisClient {
  private redis: Redis;

  constructor(uri: string) {
    this.redis = new Redis(uri);
  }

  async getObject<T>(key: string): Promise<T | null | undefined> {
    try {
      const data: string | null = await this.redis.get(key);
      return jsonParse<T>(data);
    } catch (error) {
      logger.error(`getObject error ${error}`);
      return;
    }
  }

  async setObject<T>(
    key: string,
    value: T,
    { expiresInSeconds = 60 * 30 }: { expiresInSeconds?: number }
  ): Promise<'OK' | 'ERROR'> {
    try {
      const jsonString = JSON.stringify(value);
      return this.redis.set(key, jsonString, 'EX', expiresInSeconds);
    } catch (error) {
      logger.error(`setObject error=${error}`);
      return 'ERROR';
    }
  }
}

let redisClient: RedisClient | undefined;

export const getRedisClient = (uri: string) => {
  if (redisClient !== undefined) {
    return redisClient;
  }
  redisClient = new RedisClient(uri);
  return redisClient;
};
