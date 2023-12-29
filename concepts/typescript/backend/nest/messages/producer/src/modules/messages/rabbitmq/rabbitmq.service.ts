import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class RabbitService {
  constructor(@Inject('RABBIT_SERVICE') private client: ClientProxy) {}

  async publishEvent() {
    this.client.emit('hello', {
      message: 'World',
    });
  }
}
