import { logger } from '../../libs/log';

export const jsonParse = <T>(jsonString: string | null): T | undefined => {
  if (!jsonString) return;
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    logger.error(`jsonParse error=${error}`);
    return {} as T;
  }
};
