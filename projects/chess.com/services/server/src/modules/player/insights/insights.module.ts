import { Module } from '@nestjs/common';
import { InsightsController } from './insights.controller';
import { InsightsService } from './insights.service';

@Module({
  imports: [],
  controllers: [InsightsController],
  providers: [InsightsService],
})
export class InsightsModule {}
