import { StompClient } from '../../common/clients/stomp/stomp.client';
import {
  ACTIVE_MQ_HOST,
  ACTIVE_MQ_PORT,
  ACTIVE_MQ_USERNAME,
  ACTIVE_MQ_PASSWORD,
  ACTIVE_MQ_DESTINATION,
} from '../../common/environments/environments';

const connectOptions = {
  host: ACTIVE_MQ_HOST,
  port: ACTIVE_MQ_PORT,
  connectHeaders: {
    host: '/',
    login: ACTIVE_MQ_USERNAME,
    passcode: ACTIVE_MQ_PASSWORD,
    'heart-beat': '5000,5000',
  },
};

export class RabbitService {
  private stompClient: StompClient;

  constructor() {
    this.stompClient = new StompClient(connectOptions);
  }

  async send(message: string): Promise<void> {
    await this.stompClient.connect();
    await this.stompClient.send(ACTIVE_MQ_DESTINATION, message);
  }
}
