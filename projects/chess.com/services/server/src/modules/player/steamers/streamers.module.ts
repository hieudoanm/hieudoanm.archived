import { Module } from '@nestjs/common';
import { StreamersController } from './streamers.controller';
import { StreamersRepository } from './streamers.repository';

@Module({
  imports: [],
  controllers: [StreamersController],
  providers: [StreamersRepository],
})
export class StreamersModule {}
