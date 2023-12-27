import { KafkaClient } from '../../common/clients/kafka/kafka.client';
import {
  KAFKA_CLIENT_ID,
  KAFKA_USERNAME,
  KAFKA_PASSWORD,
  KAFKA_BROKERS,
  KAFKA_TOPIC,
} from '../../common/environments/environments';

export class KafkaService {
  private kafkaClient: KafkaClient;

  constructor() {
    this.kafkaClient = new KafkaClient({
      clientId: KAFKA_CLIENT_ID,
      username: KAFKA_USERNAME,
      password: KAFKA_PASSWORD,
      brokers: KAFKA_BROKERS,
      topic: KAFKA_TOPIC,
    });
  }

  async consume() {
    await this.kafkaClient.subscribe();
  }
}
