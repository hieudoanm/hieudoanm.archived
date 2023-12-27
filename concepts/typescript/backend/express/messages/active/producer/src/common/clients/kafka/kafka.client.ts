import { Kafka, SASLOptions, Producer } from 'kafkajs';
import { logger } from '../../libs/logger';

export class KafkaClient {
  private kafka: Kafka | null;
  private producer: Producer | null = null;
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
    this.producer = this.kafka?.producer();
    this.producer.on('producer.connect', () => {
      logger.info('Producer is connected');
    });
    this.producer.on('producer.disconnect', () => {
      logger.info('Producer is disconnected');
    });
  }

  async send(message: string) {
    await this.producer?.send({
      topic: this.topic,
      messages: [{ value: message }],
    });
  }
}
