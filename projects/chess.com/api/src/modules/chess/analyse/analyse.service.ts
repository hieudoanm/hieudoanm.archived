import { LichessClient } from '../../../common/clients/lichess.org';
import { FullCloudEvaluation } from '../../../common/clients/lichess.org/types';

export class AnalyseService {
  private lichessClient: LichessClient;

  constructor() {
    this.lichessClient = new LichessClient();
  }

  public async getCloudEvaluation(fen: string): Promise<FullCloudEvaluation> {
    return this.lichessClient.getCloudEvaluation(fen, 1);
  }
}
