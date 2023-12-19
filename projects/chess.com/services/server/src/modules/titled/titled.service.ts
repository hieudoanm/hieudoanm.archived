import { Injectable } from '@nestjs/common';
import { ChessTitle } from 'src/common/clients/chess.com/types';
import { getRedisClient, RedisClient } from 'src/common/databases/redis';
import { REDIS_URI } from 'src/common/environments';
import { TimeRange } from 'src/common/types';
import { TitledStatsDto } from './titled.dto';
import { TitledRepository } from './titled.repository';

@Injectable()
export class TitledService {
  private redisClient: RedisClient;
  private titledRepository: TitledRepository;

  constructor() {
    this.redisClient = getRedisClient(REDIS_URI);
    this.titledRepository = new TitledRepository();
  }

  public async getTitledStats({
    title,
    cache = true,
    timeRange = 'YEAR',
  }: {
    cache: boolean;
    title: ChessTitle;
    timeRange: TimeRange;
  }): Promise<TitledStatsDto> {
    const key: string = `chess-titled-${title}-${timeRange}`.toLowerCase();
    if (cache) {
      const cacheTitledStats: TitledStatsDto | null | undefined =
        await this.redisClient.getObject<TitledStatsDto>(key);
      if (cacheTitledStats) {
        return cacheTitledStats;
      }
    }
    const titledStats: TitledStatsDto =
      await this.titledRepository.getTitledStats({ title, timeRange });
    await this.redisClient.setObject<TitledStatsDto>(key, titledStats, {
      expiresInSeconds: 30 * 60, // 30 minutes
    });
    return titledStats;
  }
}
