import { StompClient } from '../../common/clients/stomp/stomp.client';
import {
  ACTIVE_MQ_DESTINATION,
  ACTIVE_MQ_HOST,
  ACTIVE_MQ_PASSWORD,
  ACTIVE_MQ_PORT,
  ACTIVE_MQ_USERNAME,
} from '../../common/environments/environments';
import { logger } from '../../common/libs/log';

export class ActiveService {
  private stompClient: StompClient;

  constructor() {
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

    this.stompClient = new StompClient(connectOptions);
  }

  async consume() {
    await this.stompClient.connect();
    this.stompClient.subscribe(ACTIVE_MQ_DESTINATION, (message: string) => {
      logger.info(`Message: ${message}`);
    });
  }
}
