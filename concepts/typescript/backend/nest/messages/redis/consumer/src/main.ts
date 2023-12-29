import { INestMicroservice } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import environments from './common/environments/environments';

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

enum NewTransport {
  RABBIT = 'rabbit',
  REDIS = 'redis',
}

const options: Record<NewTransport, unknown> = {
  rabbit: rabbitOptions,
  redis: redisOptions,
};

const bootstrap = async () => {
  const app: INestMicroservice =
    await NestFactory.createMicroservice<MicroserviceOptions>(
      AppModule,
      options[NewTransport.RABBIT]
    );
  await app.listen();
};

bootstrap();
