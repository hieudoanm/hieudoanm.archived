import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import environments from 'src/common/environments/environments';
import { RedisController } from './redis.controller';
import { RedisService } from './redis.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'REDIS_SERVICE',
        transport: Transport.REDIS,
        options: {
          host: environments.redis.host,
          port: environments.redis.port,
          retryAttempts: environments.redis.retryAttempts,
          retryDelay: environments.redis.retryDelay,
        },
      },
    ]),
  ],
  controllers: [RedisController],
  providers: [RedisService],
})
export class RedisModule {}
