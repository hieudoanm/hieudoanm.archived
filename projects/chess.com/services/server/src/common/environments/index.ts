import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

const environments = dotenv.config();
dotenvExpand.expand(environments);

export const PORT: string | number = process.env.PORT ?? 3000;
export const APP_NAME: string = process.env.APP_NAME ?? 'Chess Insights';
export const NODE_ENV: string = process.env.NODE_ENV ?? 'development';
// Authentication
export const JWT_SECRET: string = process.env.JWT_SECRET ?? 'jwt-secret';
export const SALT_OR_ROUNDS: string = process.env.SALT_OR_ROUNDS ?? 'salt-10';
// Database
export const REDIS_URI: string = process.env.REDIS_URI ?? 'redis-uri';
