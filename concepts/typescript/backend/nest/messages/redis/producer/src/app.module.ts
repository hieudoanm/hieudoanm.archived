import { Module } from '@nestjs/common';
import { HealthModule } from './modules/health/health.module';
import { RedisModule } from './modules/redis/redis.module';

@Module({
  imports: [HealthModule, RedisModule],
})
export class AppModule {}
