import { Injectable } from '@nestjs/common';
import { LichessClient } from 'src/common/clients/lichess.org';
import { FullCloudEvaluation } from 'src/common/clients/lichess.org/types';

@Injectable()
export class PositionService {
  private lichessClient: LichessClient;

  constructor() {
    this.lichessClient = new LichessClient();
  }

  public async getCloudEvaluation(fen: string): Promise<FullCloudEvaluation> {
    return this.lichessClient.getCloudEvaluation(fen, 1);
  }
}
