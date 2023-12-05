import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import { json } from 'express';
import http from 'node:http';
import { ChessContext, createApolloServer } from '../src/apollo';
import { app } from '../src/app';
import { ChessDataSource } from '../src/graphql/data-source';

const startServer = async (apolloServer: ApolloServer<ChessContext>) => {
  await apolloServer.start();
  app.use(
    '/api/graphql',
    cors<cors.CorsRequest>(),
    json(),
    expressMiddleware(apolloServer, {
      context: async () => ({ chessDataSource: new ChessDataSource() })
    })
  );
};

const httpServer: http.Server = http.createServer(app);
const apolloServer: ApolloServer<ChessContext> = createApolloServer(
  httpServer
);
startServer(apolloServer);

export default httpServer;
