import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePositionDto } from 'src/generated/dto/create-position.dto';
import { PositionDto } from 'src/generated/dto/position.entity';
import { PositionRepository } from './position.repository';

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
  @ApiResponse({ status: 201, type: PositionDto })
  async syncPosition(@Body() { fen }: CreatePositionDto): Promise<PositionDto> {
    return this.positionRepository.syncPosition(fen);
  }
}
