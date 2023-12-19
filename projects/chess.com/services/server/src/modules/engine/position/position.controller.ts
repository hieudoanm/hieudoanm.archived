import { Position } from '@prisma/client';
import { PositionRepository } from './position.repository';
import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, Post, Query } from '@nestjs/common';

@Controller('chess')
@ApiTags('API - Position')
export class PositionController {
  constructor(private readonly positionRepository: PositionRepository) {}

  @Get('position')
  async getPosition(@Query('fen') fen: string): Promise<Position> {
    return this.positionRepository.getPosition(fen);
  }

  @Post('position')
  async syncPosition(@Body() { fen }: { fen: string }): Promise<Position> {
    return this.positionRepository.syncPosition(fen);
  }
}
