import { Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Player } from '@prisma/client';
import { PlayerService } from './player.service';

@Controller('chess')
@ApiTags('API - Player', 'external - chess.com')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get('player/:username')
  async getPlayer(@Param('username') username: string): Promise<Player> {
    return this.playerService.getPlayer(username);
  }

  @Post('player/:username')
  async syncPlayer(@Param('username') username: string): Promise<Player> {
    return this.playerService.syncPlayer(username);
  }
}
