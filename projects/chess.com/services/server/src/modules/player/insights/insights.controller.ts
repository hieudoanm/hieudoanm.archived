import { Controller, Get, Param } from '@nestjs/common';
import { InsightsService } from './insights.service';
import { Insights } from './insights.types';
import { ApiTags } from '@nestjs/swagger';

@Controller('chess')
@ApiTags('API - Insights', 'external - chess.com')
export class InsightsController {
  constructor(private readonly insightsService: InsightsService) {}

  @Get('player/:username/insights')
  public async getInsights(
    @Param('username') username: string
  ): Promise<Insights> {
    return this.insightsService.getInsights(username);
  }

  @Get('player/:username/insights/games')
  public async getGamesInsights(
    @Param('username') username: string
  ): Promise<Pick<Insights, 'username' | 'games'>> {
    return this.insightsService.getGamesInsights(username);
  }

  @Get('player/:username/insights/accuracy')
  public async getAccuracyInsights(
    @Param('username') username: string
  ): Promise<Pick<Insights, 'username' | 'accuracy'>> {
    return this.insightsService.getAccuracyInsights(username);
  }

  @Get('player/:username/insights/results')
  public async getResultsInsights(
    @Param('username') username: string
  ): Promise<Pick<Insights, 'username' | 'results'>> {
    return this.insightsService.getResultsInsights(username);
  }

  @Get('player/:username/insights/opponents')
  public async getResultsOpponents(
    @Param('username') username: string
  ): Promise<Pick<Insights, 'username' | 'opponents'> & { total: number }> {
    return this.insightsService.getOpponentsInsights(username);
  }
}
