import { Controller, Logger } from '@nestjs/common';
import {
  Client,
  ClientKafka,
  MessagePattern,
  Payload,
  Transport,
} from '@nestjs/microservices';

@Controller()
export class KafkaController {
  private readonly logger = new Logger(KafkaController.name);

  @Client({
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
  })
  client: ClientKafka;

  async onModuleInit() {
    this.client.subscribeToResponseOf('hello.world');
    await this.client.connect();
  }

  @MessagePattern('hello.world')
  killDragon(@Payload() message: string): any {
    this.logger.log(message);
  }
}
