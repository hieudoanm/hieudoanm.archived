import { Controller, Get, Path, Query, Route, Tags } from 'tsoa';
import { ChessTitle } from '../../../common/clients/chess.com/types';
import { TimeRange } from '../chess.enum';
import { TitledService } from './titled.service';
import { TitledStats } from './titled.types';

@Route('chess/titled')
@Tags('API - Titled', 'external - chess.com')
export class TitledController extends Controller {
  private titledService: TitledService;

  constructor() {
    super();
    this.titledService = new TitledService();
  }

  @Get(':title')
  async getTitledStats(
    @Path('title') title: ChessTitle,
    @Query('cache') cache: boolean = true,
    @Query('timeRange') timeRange: TimeRange = 'YEAR'
  ): Promise<TitledStats> {
    return this.titledService.getTitledStats({ cache, title, timeRange });
  }
}
