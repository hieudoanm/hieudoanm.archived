import { Title } from '@prisma/client';
import { Controller, Get, Query, Route, Tags } from 'tsoa';
import { StreamersRepository } from './streamers.repository';
import { StreamersResponse } from './streamers.types';

@Route('chess')
@Tags('API - Streamers', 'external - chess.com')
export class StreamersController extends Controller {
  private streamersRepository: StreamersRepository;

  constructor() {
    super();
    this.streamersRepository = new StreamersRepository();
  }

  @Get('streamers')
  async getStreamers(
    @Query('title') title?: Title,
    @Query('country') country?: string
  ): Promise<StreamersResponse> {
    return this.streamersRepository.getStreamers({ title, country });
  }
}
