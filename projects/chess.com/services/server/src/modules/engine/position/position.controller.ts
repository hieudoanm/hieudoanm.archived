import { Position } from '@prisma/client';
import { PositionRepository } from './position.repository';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PositionDto } from 'src/generated/dto/position.entity';

@Controller('position')
@ApiTags('Position')
export class PositionController {
  constructor(private readonly positionRepository: PositionRepository) {}

  @Get()
  @ApiResponse({ status: 200, type: PositionDto })
  async getPosition(@Query('fen') fen: string): Promise<PositionDto> {
    return this.positionRepository.getPosition(fen);
  }

  @Post()
  @ApiResponse({ status: 200, type: PositionDto })
  async syncPosition(@Body() { fen }: { fen: string }): Promise<PositionDto> {
    return this.positionRepository.syncPosition(fen);
  }
}
