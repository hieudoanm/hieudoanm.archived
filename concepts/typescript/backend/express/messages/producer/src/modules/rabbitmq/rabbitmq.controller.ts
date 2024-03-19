import { Controller, Body, Post, Route, Tags } from 'tsoa';
import { RabbitService } from './rabbitmq.service';

@Tags('RabbitMQ')
@Route('rabbitmq')
export class RabbitController extends Controller {
  private rabbitService: RabbitService;

  constructor() {
    super();
    this.rabbitService = new RabbitService();
  }

  @Post('produce')
  public async produce(
    @Body() { message }: { message: string }
  ): Promise<{ status: string }> {
    await this.rabbitService.send(message);
    return { status: 'success' };
  }
}
