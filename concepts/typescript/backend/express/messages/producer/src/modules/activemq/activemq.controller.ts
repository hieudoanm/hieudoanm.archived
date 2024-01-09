import { Body, Controller, Post, Route, Tags } from 'tsoa';
import { RabbitService } from './activemq.service';

@Tags('ActiveMQ')
@Route('activemq')
export class ActiveController extends Controller {
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
