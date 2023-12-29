import { Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProduceResponseDto } from '../messages.dto';
import { KafkaService } from './kafka.service';

@ApiTags('Kafka')
@Controller('kafka')
export class KafkaController {
  constructor(private readonly kafkaService: KafkaService) {}

  @Post('/produce')
  @ApiResponse({ type: ProduceResponseDto })
  async publishEvent(): Promise<ProduceResponseDto> {
    await this.kafkaService.publishEvent();
    return { status: 'OK' };
  }
}
