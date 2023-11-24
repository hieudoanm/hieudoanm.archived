import { Move } from '@prisma/client';
import { Controller, Get, Path, Post, Route, Tags } from 'tsoa';
import { MovesService } from './moves.service';

@Route('chess')
@Tags('API - Moves', 'external - chess.com')
export class MovesController extends Controller {
  private movesService: MovesService;

  constructor() {
    super();
    this.movesService = new MovesService();
  }

  @Get('player/:username/games/:gameId/moves')
  async getGameMoves(
    @Path('username') username: string,
    @Path('gameId') gameId: string
  ): Promise<Move[]> {
    return this.movesService.getGameMoves(username, gameId);
  }

  @Post('player/:username/games/:gameId/moves')
  async syncGameMoves(
    @Path('username') username: string,
    @Path('gameId') gameId: string
  ): Promise<{ total: number }> {
    return this.movesService.syncGameMoves(username, gameId);
  }
}
