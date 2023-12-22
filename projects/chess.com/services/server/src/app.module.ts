import { Module } from '@nestjs/common';
import { EngineModule } from './modules/engine/engine.module';
import { HealthModule } from './modules/health/health.module';
import { PlayerModule } from './modules/player/player.module';
import { RatingModule } from './modules/rating/rating.module';
import { TitledModule } from './modules/titled/titled.module';

@Module({
  imports: [
    EngineModule,
    HealthModule,
    PlayerModule,
    RatingModule,
    TitledModule,
  ],
})
export class AppModule {}
