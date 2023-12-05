import { mergeResolvers } from '@graphql-tools/merge';

const rootTypeDefs = `#graphql
  type Query {
    status: String
  }
`;

const rootResolvers = {
  Query: {
    status: (): string => 'OK'
  }
};

export const typeDefs = [rootTypeDefs];

export const resolvers = mergeResolvers([rootResolvers]);
