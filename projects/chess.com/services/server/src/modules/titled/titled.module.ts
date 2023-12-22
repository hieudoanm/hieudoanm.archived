import { Module } from '@nestjs/common';
import { TitledController } from './titled.controller';
import { TitledRepository } from './titled.repository';
import { TitledService } from './titled.service';

@Module({
  imports: [],
  controllers: [TitledController],
  providers: [TitledRepository, TitledService],
})
export class TitledModule {}
