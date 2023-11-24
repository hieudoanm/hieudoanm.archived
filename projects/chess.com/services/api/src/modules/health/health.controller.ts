import { Controller, Route, Tags, Get } from 'tsoa';

@Route('health')
@Tags('API - Health')
export class HealthController extends Controller {
  @Get()
  getHealth(): { status: string } {
    return { status: 'OK' };
  }
}
