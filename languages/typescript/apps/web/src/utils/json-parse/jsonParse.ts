import { logger } from '@web/log';

export const jsonParse = <T = unknown[]>(
  text: string,
  defaultValue: T[] = []
) => {
  try {
    return JSON.parse(text);
  } catch (error) {
    logger.error(error);
    return defaultValue;
  }
};
