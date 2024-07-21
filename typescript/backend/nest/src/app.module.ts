import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { CacheModule } from '@nestjs/cache-manager';

const throttlerOption = {
  ttl: 60000,
  limit: 10,
};

@Module({
  imports: [
    ThrottlerModule.forRoot([throttlerOption]),
    CacheModule.register(),
    HealthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
