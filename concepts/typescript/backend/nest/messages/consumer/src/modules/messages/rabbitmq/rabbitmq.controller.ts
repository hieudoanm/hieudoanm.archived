import { Controller, Logger } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { HelloEvent } from '../messages.dto';

@Controller()
export class RabbitController {
  private readonly logger = new Logger(RabbitController.name);

  @MessagePattern('hello')
  async handleHelloEvent(
    @Payload() data: HelloEvent,
    @Ctx() context: RmqContext
  ) {
    this.logger.log(data);
    this.logger.log(`Pattern: ${context.getPattern()}`);
  }
}
