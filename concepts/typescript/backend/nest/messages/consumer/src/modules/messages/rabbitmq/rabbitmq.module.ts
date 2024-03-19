import { Module } from '@nestjs/common';
import { RabbitController } from './rabbitmq.controller';

@Module({
  controllers: [RabbitController],
})
export class RabbitModule {}
