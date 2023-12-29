import { Controller, Logger } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { HelloEvent } from './redis.dto';

@Controller()
export class RedisController {
  private readonly logger = new Logger(RedisController.name);

  @EventPattern('hello')
  async handleHelloEvent(data: HelloEvent) {
    this.logger.log(data);
  }
}
