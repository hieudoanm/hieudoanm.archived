import { Module } from '@nestjs/common';
import { InsightsController } from './insights.controller';
import { InsightsService } from './insights.service';
import { AccuracyService } from './services/accuracy/accuracy.service';
import { GamesService } from './services/games/games.service';
import { OpponentsService } from './services/opponents/opponents.service';
import { ResultsService } from './services/results/results.service';

@Module({
  imports: [],
  controllers: [InsightsController],
  providers: [
    AccuracyService,
    GamesService,
    OpponentsService,
    ResultsService,
    InsightsService,
  ],
})
export class InsightsModule {}
