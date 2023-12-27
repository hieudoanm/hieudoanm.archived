import Redis from 'ioredis';
import { REDIS_CHANNEL } from '../../common/environments/environments';
import { logger } from '../../common/libs/logger';

export class RedisService {
  private redis: Redis;

  constructor() {
    this.redis = new Redis();
    this.redis.on('connect', function () {
      logger.info('Redis is connected');
    });
  }

  async send(message: string) {
    logger.info(`REDIS_CHANNEL=${REDIS_CHANNEL}`);
    await this.redis.publish(REDIS_CHANNEL, message);
  }
}
