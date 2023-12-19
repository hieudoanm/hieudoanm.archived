import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import compression from 'compression';
import { writeFileSync } from 'fs';
import helmet from 'helmet';
import { stringify } from 'yaml';
import { AppModule } from './app.module';
import { logger } from './common/libs/log';
import { PORT } from './common/environments';

const NODE_ENV: string = process.env.NODE_ENV || 'development';

const buildDocument = (app: INestApplication) => {
  if (NODE_ENV !== 'development') return;
  const config = new DocumentBuilder()
    .setTitle('Chess Insights')
    .setDescription('Chess Insights from chess.com')
    .setVersion('1.0')
    .build();
  const document: OpenAPIObject = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
  const documentYaml: string = stringify(document);
  writeFileSync('./docs/swagger/swagger.yaml', documentYaml);
  writeFileSync(
    './docs/swagger/swagger.json',
    JSON.stringify(document, null, 2)
  );
};

const setUpSecurity = (app: INestApplication) => {
  app.use(compression());
  app.use(helmet());
  app.enableCors();
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  buildDocument(app);
  setUpSecurity(app);
  logger.info(`🚀 Server is listening on port ${PORT}`);
  await app.listen(PORT);
}
bootstrap();
