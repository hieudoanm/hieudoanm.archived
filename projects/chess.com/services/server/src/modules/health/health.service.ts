import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  getHealth(): { status: 'OK' } {
    return { status: 'OK' };
  }
}
