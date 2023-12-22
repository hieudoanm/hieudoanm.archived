import { Module } from '@nestjs/common';
import { PositionController } from './position.controller';
import { PositionRepository } from './position.repository';
import { PositionService } from './position.service';

@Module({
  controllers: [PositionController],
  providers: [PositionRepository, PositionService],
})
export class PositionModule {}
