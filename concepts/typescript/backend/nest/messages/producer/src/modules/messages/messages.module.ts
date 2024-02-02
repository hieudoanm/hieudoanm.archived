import { Module } from '@nestjs/common';
import { GrpcModule } from './grpc/grpc.module';
import { KafkaModule } from './kafka/kafka.module';
import { RabbitModule } from './rabbitmq/rabbitmq.module';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [GrpcModule, KafkaModule, RabbitModule, RedisModule],
})
export class MessagesModule {}
