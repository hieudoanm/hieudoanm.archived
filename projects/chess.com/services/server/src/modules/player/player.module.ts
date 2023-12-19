import { Module } from '@nestjs/common';
import { PlayerController } from './player.controller';
import { PlayerService } from './player.service';
import { GamesModule } from './games/games.module';
import { StreamersModule } from './steamers/streamers.module';
import { InsightsModule } from './insights/insights.module';

@Module({
  imports: [GamesModule, InsightsModule, StreamersModule],
  controllers: [PlayerController],
  providers: [PlayerService],
})
export class PlayerModule {}
