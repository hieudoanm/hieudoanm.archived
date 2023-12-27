import http from 'http';
import { HttpError } from 'http-errors';
import app from './app';
import { PORT } from './common/environments/environments';
import { logger } from './common/libs/log';
import { ActiveService } from './router/activemq/activemq.service';
import { RedisService } from './router/redis/redis.service';
import { RabbitService } from './router/rabbitmq/rabbitmq.service';

const normalizePort = (val: string): string | number | boolean => {
  const portOrPipe = parseInt(val, 10);

  if (isNaN(portOrPipe)) {
    // named pipe
    return val;
  }

  if (portOrPipe >= 0) {
    // port number
    return portOrPipe;
  }

  return false;
};

// Get port from environment and store in Express.
const port = normalizePort(PORT);
app.set('port', port);

// Create HTTP server.
const httpServer = http.createServer(app);

const consume = async () => {
  const activeService = new ActiveService();
  await activeService.consume();
  const rabbitService = new RabbitService();
  await rabbitService.consume();
  const redisService = new RedisService();
  await redisService.consume();
};

const main = async () => {
  // ActiveMQ
  await consume();
  // HTTP Server
  httpServer.listen(port);
  httpServer.on('listening', () => {
    const addr = httpServer.address();
    const bind =
      typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr?.port;
    logger.info(`🚀 Consumer is listening on ${bind}`);
  });
  httpServer.on('error', (error: HttpError) => {
    if (error.syscall !== 'listen') {
      throw error;
    }
    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
    if (error.code === 'EACCES') {
      logger.error(`${bind} requires elevated privileges`);
    }
    if (error.code === 'EADDRINUSE') {
      logger.error(`${bind} is already in use`);
    }
    process.exit(1);
  });
};

main().catch((error: Error) => logger.error(`main error=${error}`));

process.on('unhandledRejection', (reason: string) => {
  // I just caught an unhandled promise rejection,
  // since we already have fallback handler for unhandled errors (see below),
  // let throw and let him handle that
  logger.error(`unhandledRejection reason=${reason}`);
  throw reason;
});

process.on('uncaughtException', (error: Error) => {
  // I just received an error that was never handled, time to handle it and then decide whether a restart is needed
  logger.error(`uncaughtException error=${error}`);
  process.exit(1);
});
