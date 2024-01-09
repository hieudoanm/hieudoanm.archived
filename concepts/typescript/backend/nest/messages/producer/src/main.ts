import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { writeFileSync } from 'fs';
import helmet from 'helmet';
import { dump } from 'js-yaml';
import { AppModule } from './app.module';
import environments from './common/environments/environments';

const buildDocument = (app: INestApplication) => {
  if (environments.environment !== 'development') return;
  const config = new DocumentBuilder()
    .setTitle('Nest.js - Messages - Template')
    .setDescription('Nest.js - Messages - Template')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  const swaggerPath: string = './docs/swagger';
  const json = JSON.stringify(document, null, 2);
  writeFileSync(`${swaggerPath}/swagger.json`, json);
  const yaml: string = dump(document);
  writeFileSync(`${swaggerPath}/swagger.yaml`, yaml);
  return document;
};

const setupSecurity = (app: INestApplication) => {
  app.enableCors();
  app.use(helmet());
};

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  buildDocument(app);
  setupSecurity(app);
  console.info(`Producer is listening on port ${environments.port}`);
  await app.listen(environments.port);
};

bootstrap();
