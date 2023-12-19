import { ApiProperty } from '@nestjs/swagger';
import { Game } from '@prisma/client';
import { GameDto } from 'src/generated/dto/game.entity';

export class GamesResponseDto {
  @ApiProperty()
  total: number;

  @ApiProperty({ type: [GameDto] })
  games: Game[];
}

export class SyncedResponseDto {
  @ApiProperty()
  total: number;

  @ApiProperty()
  synced: number;

  existed: number;
}
