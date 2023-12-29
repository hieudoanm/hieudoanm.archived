import { Module } from '@nestjs/common';
import { RedisModule } from './redis/redis.module';
import { RabbitModule } from './rabbitmq/rabbitmq.module';

@Module({
  imports: [RabbitModule, RedisModule],
})
export class MessagesModule {}
