import { Title } from '@prisma/client';
import { StreamersRepository } from './streamers.repository';
import { StreamersResponse } from './streamers.types';
import { ApiTags } from '@nestjs/swagger';
import { Controller, Query, Get } from '@nestjs/common';

@Controller('chess')
@ApiTags('API - Streamers', 'external - chess.com')
export class StreamersController {
  constructor(private readonly streamersRepository: StreamersRepository) {}

  @Get('streamers')
  async getStreamers(
    @Query('title') title?: Title,
    @Query('country') country?: string
  ): Promise<StreamersResponse> {
    return this.streamersRepository.getStreamers({ title, country });
  }
}
