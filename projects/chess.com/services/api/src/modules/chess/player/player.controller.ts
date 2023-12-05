import { Player } from '@prisma/client';
import { Controller, Get, Path, Post, Route, Tags } from 'tsoa';
import { PlayerService } from './player.service';

@Route('chess')
@Tags('API - Player', 'external - chess.com')
export class PlayerController extends Controller {
  private playerService: PlayerService;

  constructor() {
    super();
    this.playerService = new PlayerService();
  }

  @Get('player/:username')
  async getPlayer(@Path('username') username: string): Promise<Player> {
    return this.playerService.getPlayer(username);
  }

  @Post('player/:username')
  async syncPlayer(@Path('username') username: string): Promise<Player> {
    return this.playerService.syncPlayer(username);
  }
}
