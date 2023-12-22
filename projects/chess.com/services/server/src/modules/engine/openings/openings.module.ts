import { Module } from '@nestjs/common';
import { OpeningsController } from './openings.controller';
import { OpeningsRepository } from './openings.repository';

@Module({
  controllers: [OpeningsController],
  providers: [OpeningsRepository],
})
export class OpeningsModule {}
