import { Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { RedisResponseDto } from './redis.dto';
import { RedisService } from './redis.service';

@ApiTags('Redis')
@Controller('redis')
export class RedisController {
  constructor(private readonly redisService: RedisService) {}

  @Post('/produce')
  @ApiResponse({ type: RedisResponseDto })
  async publishEvent(): Promise<RedisResponseDto> {
    await this.redisService.publishEvent();
    return { status: 'OK' };
  }
}
