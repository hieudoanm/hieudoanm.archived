import { Move } from '@prisma/client';
import { MovesService } from './moves.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Param, Post } from '@nestjs/common';
import { MoveDto } from 'src/generated/dto/move.entity';

@Controller()
@ApiTags('Moves')
export class MovesController {
  constructor(private readonly movesService: MovesService) {}

  @Get('player/:username/games/:gameId/moves')
  @ApiResponse({ status: 200, type: [MoveDto] })
  async getGameMoves(
    @Param('username') username: string,
    @Param('gameId') gameId: string
  ): Promise<Move[]> {
    return this.movesService.getGameMoves(username, gameId);
  }

  @Post('player/:username/games/:gameId/moves')
  @ApiResponse({ status: 200 })
  async syncGameMoves(
    @Param('username') username: string,
    @Param('gameId') gameId: string
  ): Promise<{ total: number }> {
    return this.movesService.syncGameMoves(username, gameId);
  }
}
