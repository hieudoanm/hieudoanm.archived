import { Body, Controller, Post, Route, Tags } from 'tsoa';
import { KafkaService } from './kafka.service';

@Tags('Kafka')
@Route('kafka')
export class KafkaController extends Controller {
  private kafkaService: KafkaService;

  constructor() {
    super();
    this.kafkaService = new KafkaService();
  }

  @Post('produce')
  public async produce(
    @Body() { message }: { message: string }
  ): Promise<{ status: string }> {
    await this.kafkaService.send(message);
    return { status: 'success' };
  }
}
