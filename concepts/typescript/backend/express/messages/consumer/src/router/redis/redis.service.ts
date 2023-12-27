import Redis from 'ioredis';
import { REDIS_CHANNEL } from '../../common/environments/environments';
import { logger } from '../../common/libs/log';

export class RedisService {
  private redis: Redis;

  constructor() {
    this.redis = new Redis();
    this.redis.on('connect', function () {
      logger.info('Redis is connected');
    });
    this.redis.on('message', (channel: string, message: string) => {
      logger.info(`Received ${message} from ${channel}`);
    });
    this.redis.on('messageBuffer', (channel: Buffer, message: Buffer) => {
      // Both `channel` and `message` are buffers.
      logger.info(`Received ${message} from ${channel}`);
    });
  }

  async subscribe() {
    logger.info(`REDIS_CHANNEL=${REDIS_CHANNEL}`);
    this.redis.subscribe(REDIS_CHANNEL, (error: Error | null | undefined) => {
      if (error) {
        logger.error(`RedisService.subscribe error=${error}`);
      } else {
        logger.info(`RedisService.subscribe successfully`);
      }
    });
  }

  async consume() {
    this.subscribe();
  }
}
