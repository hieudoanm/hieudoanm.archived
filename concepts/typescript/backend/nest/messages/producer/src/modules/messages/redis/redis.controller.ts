import { Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProduceResponseDto } from '../messages.dto';
import { RedisService } from './redis.service';

@ApiTags('Redis')
@Controller('redis')
export class RedisController {
  constructor(private readonly redisService: RedisService) {}

  @Post('/produce')
  @ApiResponse({ type: ProduceResponseDto })
  async publishEvent(): Promise<ProduceResponseDto> {
    await this.redisService.publishEvent();
    return { status: 'OK' };
  }
}
