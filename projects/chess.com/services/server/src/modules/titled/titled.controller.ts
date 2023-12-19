import { Controller, Query, Get, Param } from '@nestjs/common';
import { ChessTitle } from '../../common/clients/chess.com/types';
import { TimeRange } from '../chess.enum';
import { TitledService } from './titled.service';
import { TitledStats } from './titled.types';
import { ApiTags } from '@nestjs/swagger';

@Controller('chess/titled')
@ApiTags('API - Titled', 'external - chess.com')
export class TitledController {
  constructor(private readonly titledService: TitledService) {}

  @Get(':title')
  async getTitledStats(
    @Param('title') title: ChessTitle,
    @Query('cache') cache: boolean = true,
    @Query('timeRange') timeRange: TimeRange = 'YEAR'
  ): Promise<TitledStats> {
    return this.titledService.getTitledStats({ cache, title, timeRange });
  }
}
