import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { KafkaController } from './kafka.controller';
import { KafkaService } from './kafka.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'hello',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'hello-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [KafkaController],
  providers: [KafkaService],
})
export class KafkaModule {}
