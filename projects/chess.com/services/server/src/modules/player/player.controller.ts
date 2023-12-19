import { Controller, Get, Param, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Player } from '@prisma/client';
import { PlayerService } from './player.service';
import { PlayerDto } from 'src/generated/dto/player.entity';

@Controller('player')
@ApiTags('Player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get(':username')
  @ApiResponse({ status: 200, type: PlayerDto })
  async getPlayer(@Param('username') username: string): Promise<Player> {
    return this.playerService.getPlayer(username);
  }

  @Post(':username')
  @ApiResponse({ status: 200, type: PlayerDto })
  async syncPlayer(@Param('username') username: string): Promise<Player> {
    return this.playerService.syncPlayer(username);
  }
}
