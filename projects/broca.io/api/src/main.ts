import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import * as compression from 'compression';
import { writeFileSync } from 'fs';
import helmet from 'helmet';
import { stringify } from 'yaml';
import { AppModule } from './app.module';

const NODE_ENV: string = process.env.NODE_ENV || 'development';

const buildDocument = (app: INestApplication) => {
  if (NODE_ENV !== 'development') return;
  const config = new DocumentBuilder()
    .setTitle('broca.io')
    .setDescription('broca.io')
    .setVersion('1.0')
    .addTag('broca')
    .build();
  const document: OpenAPIObject = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  const documentYaml: string = stringify(document);
  writeFileSync('./docs/swagger/swagger.yaml', documentYaml);
  writeFileSync(
    './docs/swagger/swagger.json',
    JSON.stringify(document, null, 2),
  );
};

const setUpSecurity = (app: INestApplication) => {
  app.use(compression());
  app.use(helmet());
  app.enableCors();
};

const bootstrap = async () => {
  const app: INestApplication = await NestFactory.create(AppModule);
  buildDocument(app);
  setUpSecurity(app);
  await app.listen(3000);
};

bootstrap();
