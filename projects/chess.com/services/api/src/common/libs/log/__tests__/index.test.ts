import { logger } from '..';

describe('logger', () => {
  it('info', () => {
    logger.info('info');
    expect(logger).toBeTruthy();
  });
});
