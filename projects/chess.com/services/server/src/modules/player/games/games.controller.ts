import { Game } from '@prisma/client';
import { GamesService } from './games.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { GamesResponseDto, SyncedResponseDto } from './games.dto';
import { GameDto } from 'src/generated/dto/game.entity';

@Controller()
@ApiTags('Player - Games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Get('player/:username/games')
  @ApiResponse({ status: 200, type: GamesResponseDto })
  async getGames(
    @Param('username') username: string,
    @Query('month') month: number = new Date().getMonth() + 1,
    @Query('year') year: number = new Date().getFullYear()
  ): Promise<GamesResponseDto> {
    return this.gamesService.getGames(username, { month, year });
  }

  @Post('player/:username/games')
  @ApiResponse({ status: 200, type: SyncedResponseDto })
  async syncGames(
    @Param('username') username: string,
    @Body()
    {
      month = new Date().getMonth() + 1,
      year = new Date().getFullYear(),
    }: { month: number; year: number }
  ): Promise<SyncedResponseDto> {
    return this.gamesService.syncGames(username, { month, year });
  }

  @Get('player/:username/games/:gameId')
  @ApiResponse({ status: 200, type: GameDto })
  async getGame(
    @Param('username') username: string,
    @Param('gameId') gameId: string
  ): Promise<GameDto> {
    return this.gamesService.getGame(username, gameId);
  }

  @Get('player/:username/games/:gameId/pgn')
  @ApiResponse({ status: 200, type: String })
  async getGamePGN(
    @Param('username') username: string,
    @Param('gameId') gameId: string
  ): Promise<string> {
    return this.gamesService.getGamePGN(username, gameId);
  }
}
