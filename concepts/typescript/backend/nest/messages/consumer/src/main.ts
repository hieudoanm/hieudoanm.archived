import { INestMicroservice } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import environments from './common/environments/environments';
import { join } from 'node:path';

const grpcOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'hello',
    protoPath: join(__dirname, '../proto/grpc.proto'),
  },
};

const kafkaOptions = {
  transport: Transport.KAFKA,
  options: {
    client: {
      brokers: ['localhost:9092'],
    },
  },
};

const rabbitOptions = {
  transport: Transport.RMQ,
  options: {
    urls: ['amqp://localhost:5672'],
    queue: 'hello_queue',
    queueOptions: {
      durable: false,
    },
  },
};

const redisOptions = {
  transport: Transport.REDIS,
  options: {
    host: environments.redis.host,
    port: environments.redis.port,
    retryAttempts: environments.redis.retryAttempts,
    retryDelay: environments.redis.retryDelay,
  },
};

enum CustomTransport {
  GRPC = 'grpc',
  KAFKA = 'kafka',
  RABBIT = 'rabbit',
  REDIS = 'redis',
}

const options: Record<CustomTransport, unknown> = {
  grpc: grpcOptions,
  kafka: kafkaOptions,
  rabbit: rabbitOptions,
  redis: redisOptions,
};

const bootstrap = async () => {
  const app: INestMicroservice =
    await NestFactory.createMicroservice<MicroserviceOptions>(
      AppModule,
      options[CustomTransport.KAFKA]
    );
  await app.listen();
};

bootstrap();
