import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { HealthResponseDto } from './health.dto';

@ApiTags('Health')
@Controller()
export class HealthController {
  @Get('/health')
  @ApiResponse({ type: HealthResponseDto })
  getHealth(): HealthResponseDto {
    return { status: 'OK' };
  }
}
