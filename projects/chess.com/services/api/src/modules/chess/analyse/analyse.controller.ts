import { Body, Controller, Post, Route, Tags } from 'tsoa';
import { FullCloudEvaluation } from '../../../common/clients/lichess.org/types';
import { AnalyseService } from './analyse.service';

@Route('chess')
@Tags('API - Analyse', 'external - lichess.org')
export class AnalyseController extends Controller {
  private analyseService: AnalyseService;

  constructor() {
    super();
    this.analyseService = new AnalyseService();
  }

  @Post('/analyse')
  async analyse(
    @Body() { fen }: { fen: string; }
  ): Promise<FullCloudEvaluation> {
    return this.analyseService.getCloudEvaluation(fen);
  }
}
