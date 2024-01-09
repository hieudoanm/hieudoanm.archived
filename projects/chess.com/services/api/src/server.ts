import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import { json } from 'express';
import { HttpError } from 'http-errors';
import http from 'node:http';
import { ChessContext, createApolloServer } from './apollo';
import { app } from './app';
import { PORT } from './common/environments';
import { logger } from './common/libs/log';
import { ChessDataSource } from './graphql/data-source';

const normalizePort = (value: string): string | number | boolean => {
  const portOrPipe = Number.parseInt(value, 10);

  if (Number.isNaN(portOrPipe)) {
    // named pipe
    return value;
  }

  if (portOrPipe >= 0) {
    // port number
    return portOrPipe;
  }

  return false;
};

const main = async () => {
  // Server
  const httpServer: http.Server = http.createServer(app);
  const apolloServer: ApolloServer<ChessContext> =
    createApolloServer(httpServer);
  await apolloServer.start();
  app.use(
    '/api/graphql',
    cors<cors.CorsRequest>(),
    json(),
    expressMiddleware(apolloServer, {
      context: async () => ({ chessDataSource: new ChessDataSource() }),
    })
  );
  // Port
  const port = normalizePort(PORT);
  httpServer.listen(port);
  // on
  httpServer.on('listening', () => {
    const address = httpServer.address();
    const bind: string =
      typeof address === 'string' ? `pipe ${address}` : `port ${address?.port}`;
    logger.info(`🚀 Server is listening on ${bind}`);
  });
  httpServer.on('error', (error: HttpError) => {
    if (error.syscall !== 'listen') {
      throw error;
    }
    const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;
    if (error.code === 'EACCES') {
      logger.error(`${bind} requires elevated privileges`);
    }
    if (error.code === 'EADDRINUSE') {
      logger.error(`${bind} is already in use`);
    }
    throw new Error(error.message);
  });
};

main();

process.on('unhandledRejection', (reason: string) => {
  throw new Error(`unhandledRejection ${reason}`);
});

process.on('uncaughtException', (error: Error) => {
  logger.error(`uncaughtException ${error}`);
  process.exit(1);
});
