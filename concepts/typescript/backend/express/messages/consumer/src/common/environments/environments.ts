import dotenv from 'dotenv';
dotenv.config();

export const NODE_ENV = process.env.NODE_ENV ?? 'development';
export const PORT = process.env.PORT ?? '4001';
// ActiveMQ
export const ACTIVE_MQ_HOST: string = process.env.ACTIVE_MQ_HOST ?? 'localhost';
export const ACTIVE_MQ_USERNAME: string =
  process.env.ACTIVE_MQ_USERNAME ?? 'username';
export const ACTIVE_MQ_PASSWORD: string =
  process.env.ACTIVE_MQ_PASSWORD ?? 'password';
export const ACTIVE_MQ_PORT: number =
  parseInt(process.env.ACTIVE_MQ_PORT ?? '61613', 10) ?? 61613;
export const ACTIVE_MQ_DESTINATION: string =
  process.env.ACTIVE_MQ_DESTINATION ?? '/queue/starter';
// Kafka
export const KAFKA_USERNAME: string = process.env.KAFKA_USERNAME ?? '';
export const KAFKA_PASSWORD: string = process.env.KAFKA_PASSWORD ?? '';
export const KAFKA_BROKERS: string[] = process.env.KAFKA_BROKERS?.split(
  ','
) ?? ['kafka:9092'];
export const KAFKA_CLIENT_ID: string =
  process.env.KAFKA_CLIENT_ID ?? 'kafka-client-id';
export const KAFKA_TOPIC: string = process.env.KAFKA_TOPIC ?? 'kafka-topic';
// RabbitMQ
export const RABBIT_URL = process.env.RABBIT_URL ?? '';
export const RABBIT_QUEUE = process.env.RABBIT_QUEUE ?? 'rabbit-queue';
// Redis
export const REDIS_CHANNEL = process.env.REDIS_CHANNEL ?? 'redis-channel';
