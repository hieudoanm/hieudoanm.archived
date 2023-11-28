import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault
} from '@apollo/server/plugin/landingPage/default';
import graphqlDepthLimit from 'graphql-depth-limit';
import http from 'node:http';
import { NODE_ENV } from './common/environments';
import { DataSources } from './graphql/data-sources';
import { resolvers, typeDefs } from './graphql/graphql.module';

export interface ApolloContext {
  dataSources: DataSources;
}

export const createApolloServer = (
  httpServer: http.Server
): ApolloServer<ApolloContext> => {
  const landingPage = NODE_ENV === 'production'
    ? ApolloServerPluginLandingPageProductionDefault()
    : ApolloServerPluginLandingPageLocalDefault();
  const apolloServer: ApolloServer<ApolloContext> = new ApolloServer<
    ApolloContext
  >({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    validationRules: [graphqlDepthLimit(10)],
    introspection: NODE_ENV !== 'production',
    plugins: [
      landingPage,
      ApolloServerPluginDrainHttpServer({ httpServer })
    ]
  });
  return apolloServer;
};
