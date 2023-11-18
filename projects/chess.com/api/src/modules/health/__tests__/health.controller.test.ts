import { HealthController } from '../health.controller';

describe('HealthController', () => {
  const healthController = new HealthController();

  it('should call status and json', () => {
    expect(healthController.getHealth()).toEqual({ status: 'OK' });
  });
});
