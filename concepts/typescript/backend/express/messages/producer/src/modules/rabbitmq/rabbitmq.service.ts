import { RabbitClient } from '../../common/clients/rabbit/rabbit.client';
import {
  RABBIT_QUEUE,
  RABBIT_URL,
} from '../../common/environments/environments';

export class RabbitService {
  private rabbitClient: RabbitClient;

  constructor() {
    this.rabbitClient = new RabbitClient(RABBIT_URL, RABBIT_QUEUE);
  }

  async send(message: string): Promise<void> {
    await this.rabbitClient.connect();
    await this.rabbitClient.sendToQueue(message);
  }
}
