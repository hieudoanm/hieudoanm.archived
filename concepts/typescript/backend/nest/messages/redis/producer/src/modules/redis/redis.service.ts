import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class RedisService {
  constructor(@Inject('GREETING_SERVICE') private client: ClientProxy) {}

  async publishEvent() {
    this.client.emit('hello', {
      message: 'World',
    });
  }
}
