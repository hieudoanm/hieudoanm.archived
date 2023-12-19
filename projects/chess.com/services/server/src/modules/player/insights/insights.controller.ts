import { Controller, Get, Param } from '@nestjs/common';
import { InsightsService } from './insights.service';
import { Insights } from './insights.types';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('Player - Insights')
export class InsightsController {
  constructor(private readonly insightsService: InsightsService) {}

  @Get('player/:username/insights')
  @ApiResponse({ status: 200 })
  public async getInsights(
    @Param('username') username: string
  ): Promise<Insights> {
    return this.insightsService.getInsights(username);
  }

  @Get('player/:username/insights/games')
  @ApiResponse({ status: 200 })
  public async getGamesInsights(
    @Param('username') username: string
  ): Promise<Pick<Insights, 'username' | 'games'>> {
    return this.insightsService.getGamesInsights(username);
  }

  @Get('player/:username/insights/accuracy')
  @ApiResponse({ status: 200 })
  public async getAccuracyInsights(
    @Param('username') username: string
  ): Promise<Pick<Insights, 'username' | 'accuracy'>> {
    return this.insightsService.getAccuracyInsights(username);
  }

  @Get('player/:username/insights/results')
  @ApiResponse({ status: 200 })
  public async getResultsInsights(
    @Param('username') username: string
  ): Promise<Pick<Insights, 'username' | 'results'>> {
    return this.insightsService.getResultsInsights(username);
  }

  @Get('player/:username/insights/opponents')
  @ApiResponse({ status: 200 })
  public async getResultsOpponents(
    @Param('username') username: string
  ): Promise<Pick<Insights, 'username' | 'opponents'> & { total: number }> {
    return this.insightsService.getOpponentsInsights(username);
  }
}
