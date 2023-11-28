import { mergeResolvers } from '@graphql-tools/merge';
import {
  countriesResolvers,
  countriesTypeDefs
} from './resolvers/countries/countries.schema';
import {
  openingsResolvers,
  openingsTypeDefs
} from './resolvers/openings/openings.schema';
import {
  playerResolvers,
  playerTypeDefs
} from './resolvers/player/player.schema';
import {
  streamersResolvers,
  streamersTypeDefs
} from './resolvers/streamers/streamers.schema';
import {
  titledResolvers,
  titledTypeDefs
} from './resolvers/titled/titled.schema';

const rootResolvers = { Query: { status: (): string => 'OK' } };

const rootTypeDefs = `#graphql
  type Query {
    status: String
  }

  type Mutation {
    status: String
  }
`;

export const resolvers = mergeResolvers([
  rootResolvers,
  countriesResolvers,
  openingsResolvers,
  playerResolvers,
  streamersResolvers,
  titledResolvers
]);

export const typeDefs: string[] = [
  rootTypeDefs,
  countriesTypeDefs,
  openingsTypeDefs,
  playerTypeDefs,
  streamersTypeDefs,
  titledTypeDefs
];
