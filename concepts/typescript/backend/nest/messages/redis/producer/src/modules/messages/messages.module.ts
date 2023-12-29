import { Module } from '@nestjs/common';
import { RedisModule } from './redis/redis.module';
import { RabbitModule } from './rabbitmq/rabbitmq.module';
import { KafkaModule } from './kafka/kafka.module';

@Module({
  imports: [KafkaModule, RabbitModule, RedisModule],
})
export class MessagesModule {}
