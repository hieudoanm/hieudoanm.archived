import { Stomp } from '../common/clients/stomp';
import { ACTIVE_MQ_DESTINATION } from '../common/environments';
import log from '../common/libs/log';

export const consumer = (stomp: Stomp) => {
  stomp.subscribe(ACTIVE_MQ_DESTINATION, (message: string) => {
    log.info(`Message: ${message}`);
  });
};
