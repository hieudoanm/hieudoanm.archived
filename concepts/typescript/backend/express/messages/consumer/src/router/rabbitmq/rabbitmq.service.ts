import { RabbitClient } from '../../common/clients/rabbit/rabbit.client';
import {
  RABBIT_URL,
  RABBIT_QUEUE,
} from '../../common/environments/environments';
import { logger } from '../../common/libs/log';

export class RabbitService {
  private rabbitClient: RabbitClient;

  constructor() {
    this.rabbitClient = new RabbitClient(RABBIT_URL, RABBIT_QUEUE);
  }

  async consume() {
    await this.rabbitClient.connect();
    this.rabbitClient.consume(RABBIT_QUEUE, (msg) => {
      const message = msg?.content.toString();
      logger.info(`RabbitService.consume message=${message}`);
    });
  }
}
