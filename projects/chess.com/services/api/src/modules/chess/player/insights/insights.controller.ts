import { Controller, Get, Path, Route, Tags } from 'tsoa';
import { InsightsService } from './insights.service';
import { Insights } from './insights.types';

@Route('chess')
@Tags('API - Insights', 'external - chess.com')
export class InsightsController extends Controller {
  private insightsService: InsightsService;

  constructor() {
    super();
    this.insightsService = new InsightsService();
  }

  @Get('player/:username/insights')
  public async getInsights(
    @Path('username') username: string
  ): Promise<Insights> {
    return this.insightsService.getInsights(username);
  }

  @Get('player/:username/insights/games')
  public async getGamesInsights(
    @Path('username') username: string
  ): Promise<Pick<Insights, 'username' | 'games'>> {
    return this.insightsService.getGamesInsights(username);
  }

  @Get('player/:username/insights/accuracy')
  public async getAccuracyInsights(
    @Path('username') username: string
  ): Promise<Pick<Insights, 'username' | 'accuracy'>> {
    return this.insightsService.getAccuracyInsights(username);
  }

  @Get('player/:username/insights/results')
  public async getResultsInsights(
    @Path('username') username: string
  ): Promise<Pick<Insights, 'username' | 'results'>> {
    return this.insightsService.getResultsInsights(username);
  }

  @Get('player/:username/insights/opponents')
  public async getResultsOpponents(
    @Path('username') username: string
  ): Promise<Pick<Insights, 'username' | 'opponents'> & { total: number }> {
    return this.insightsService.getOpponentsInsights(username);
  }
}
