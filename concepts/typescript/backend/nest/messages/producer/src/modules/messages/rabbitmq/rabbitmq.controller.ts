import { Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProduceResponseDto } from '../messages.dto';
import { RabbitService } from './rabbitmq.service';

@ApiTags('RabbitMQ')
@Controller('rabbitmq')
export class RabbitController {
  constructor(private readonly rabbitService: RabbitService) {}

  @Post('/produce')
  @ApiResponse({ type: ProduceResponseDto })
  async publishEvent(): Promise<ProduceResponseDto> {
    await this.rabbitService.publishEvent();
    return { status: 'OK' };
  }
}
