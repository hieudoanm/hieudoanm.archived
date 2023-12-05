import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

const environments = dotenv.config();
dotenvExpand.expand(environments);

export const PORT: string = process.env.PORT ?? '8080';
export const NODE_ENV: string = process.env.NODE_ENV ?? '';

export const JWT_SECRET: string = process.env.JWT_SECRET ?? '';
export const SALT_OR_ROUNDS: string = process.env.SALT_OR_ROUNDS ?? '';

export const VAULT_ENDPOINT: string = process.env.VAULT_ENDPOINT ?? '';
export const VAULT_TOKEN: string = process.env.VAULT_TOKEN ?? '';

export const ELASTICSEARCH_NODE: string = process.env.ELASTICSEARCH_NODE ?? '';
