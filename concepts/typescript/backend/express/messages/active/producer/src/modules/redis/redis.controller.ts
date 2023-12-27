import { Body, Controller, Post, Route, Tags } from 'tsoa';
import { RedisService } from './redis.service';

@Tags('Redis')
@Route('redis')
export class RedisController extends Controller {
  private redisService: RedisService;

  constructor() {
    super();
    this.redisService = new RedisService();
  }

  @Post('produce')
  public async produce(
    @Body() { message }: { message: string }
  ): Promise<{ status: 'success' }> {
    await this.redisService.send(message);
    return { status: 'success' };
  }
}
