import { Kafka, SASLOptions, Consumer } from 'kafkajs';
import { logger } from '../../libs/log';

export class KafkaClient {
  private kafka: Kafka | null;
  private consumer: Consumer | null = null;
  private topic: string;

  constructor({
    clientId,
    username,
    password,
    brokers,
    topic,
  }: {
    clientId: string;
    username: string;
    password: string;
    brokers: string[];
    topic: string;
  }) {
    const sasl: SASLOptions | undefined =
      username && password
        ? {
            username: username,
            password: password,
            mechanism: 'scram-sha-512',
          }
        : undefined;
    const ssl = !!sasl;
    this.topic = topic;
    this.kafka = new Kafka({ clientId, brokers, ssl, sasl });
    this.consumer = this.kafka?.consumer({ groupId: clientId });
    this.consumer.on('consumer.connect', () => {
      logger.info('Consumer is connected');
    });
    this.consumer.on('consumer.disconnect', () => {
      logger.info('Consumer is disconnected');
    });
  }

  async subscribe() {
    await this.consumer?.connect();
    await this.consumer?.subscribe({
      topic: this.topic,
      fromBeginning: true,
    });
    await this.consumer?.run({
      eachMessage: async ({ topic, partition, message }) => {
        const offset = message.offset;
        const value = message.value?.toString() || '';
        logger.info(
          `Receiving topic=${topic} partition=${partition} offset=${offset} value=${value}`
        );
      },
    });
  }
}
