import { Game } from '@prisma/client';
import { GamesService } from './games.service';
import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('chess')
@ApiTags('API - Games', 'external - chess.com')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Get('player/:username/games')
  async getGames(
    @Param('username') username: string,
    @Query('month') month: number = new Date().getMonth() + 1,
    @Query('year') year: number = new Date().getFullYear()
  ): Promise<{ total: number; games: Game[] }> {
    return this.gamesService.getGames(username, { month, year });
  }

  @Post('player/:username/games')
  async syncGames(
    @Param('username') username: string,
    @Body()
    {
      month = new Date().getMonth() + 1,
      year = new Date().getFullYear(),
    }: { month: number; year: number }
  ): Promise<{
    total: number;
    synced: number;
    existed: number;
  }> {
    return this.gamesService.syncGames(username, { month, year });
  }

  @Get('player/:username/games/:gameId')
  async getGame(
    @Param('username') username: string,
    @Param('gameId') gameId: string
  ): Promise<Game> {
    return this.gamesService.getGame(username, gameId);
  }

  @Get('player/:username/games/:gameId/pgn')
  async getGamePGN(
    @Param('username') username: string,
    @Param('gameId') gameId: string
  ): Promise<string> {
    return this.gamesService.getGamePGN(username, gameId);
  }
}
