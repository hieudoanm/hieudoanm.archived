import { Game } from '@prisma/client';
import { Body, Controller, Get, Path, Post, Query, Route, Tags } from 'tsoa';
import { GamesService } from './games.service';

@Route('chess')
@Tags('API - Games', 'external - chess.com')
export class GamesController extends Controller {
  private gamesService: GamesService;

  constructor() {
    super();
    this.gamesService = new GamesService();
  }

  @Get('player/:username/games')
  async getGames(
    @Path('username') username: string,
    @Query('month') month: number = new Date().getMonth() + 1,
    @Query('year') year: number = new Date().getFullYear()
  ): Promise<{ total: number; games: Game[] }> {
    return this.gamesService.getGames(username, { month, year });
  }

  @Post('player/:username/games')
  async syncGames(
    @Path('username') username: string,
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
    @Path('username') username: string,
    @Path('gameId') gameId: string
  ): Promise<Game> {
    return this.gamesService.getGame(username, gameId);
  }

  @Get('player/:username/games/:gameId/pgn')
  async getGamePGN(
    @Path('username') username: string,
    @Path('gameId') gameId: string
  ): Promise<string> {
    return this.gamesService.getGamePGN(username, gameId);
  }
}
