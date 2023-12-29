import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class KafkaService {
  constructor(@Inject('KAFKA_SERVICE') private client: ClientProxy) {}

  async publishEvent() {
    this.client.emit('hello.world', {
      message: 'World',
    });
  }
}
