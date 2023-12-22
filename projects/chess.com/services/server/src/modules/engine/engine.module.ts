import { Module } from '@nestjs/common';
import { OpeningsModule } from './openings/openings.module';
import { PositionModule } from './position/position.module';

@Module({
  imports: [OpeningsModule, PositionModule],
})
export class EngineModule {}
