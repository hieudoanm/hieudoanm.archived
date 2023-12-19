import { Controller, Query, Get, Param } from '@nestjs/common';
import { ChessTitle } from '../../common/clients/chess.com/types';
import { TimeRange } from '../chess.enum';
import { TitledService } from './titled.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { TitledStatsDto, TitlesDto } from './titled.dto';

@Controller('titled')
@ApiTags('Titled')
export class TitledController {
  constructor(private readonly titledService: TitledService) {}

  @Get()
  @ApiResponse({ status: 200, type: TitlesDto })
  getTitles(): TitlesDto {
    const titles: string[] = [
      'GM',
      'IM',
      'FM',
      'CM',
      'NM',
      'WGM',
      'WIM',
      'WFM',
      'WCM',
      'WNM',
    ];
    return { total: titles.length, titles };
  }

  @Get(':title')
  @ApiResponse({ status: 200, type: TitledStatsDto })
  async getTitledStats(
    @Param('title') title: ChessTitle,
    @Query('cache') cache: boolean = true,
    @Query('timeRange') timeRange: TimeRange = 'YEAR'
  ): Promise<TitledStatsDto> {
    return this.titledService.getTitledStats({ cache, title, timeRange });
  }
}
