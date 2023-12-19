import { Move } from '@prisma/client';
import { MovesService } from './moves.service';
import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('chess')
@ApiTags('API - Moves', 'external - chess.com')
export class MovesController {
  constructor(private readonly movesService: MovesService) {}

  @Get('player/:username/games/:gameId/moves')
  async getGameMoves(
    @Param('username') username: string,
    @Param('gameId') gameId: string
  ): Promise<Move[]> {
    return this.movesService.getGameMoves(username, gameId);
  }

  @Post('player/:username/games/:gameId/moves')
  async syncGameMoves(
    @Param('username') username: string,
    @Param('gameId') gameId: string
  ): Promise<{ total: number }> {
    return this.movesService.syncGameMoves(username, gameId);
  }
}
