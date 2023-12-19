import { ApiProperty } from '@nestjs/swagger';
import { Player } from '@prisma/client';
import { PlayerDto } from '../../generated/dto/player.entity';

export class TitlesDto {
  @ApiProperty()
  total: number;

  @ApiProperty()
  titles: string[];
}

export class TitledStatsDto {
  @ApiProperty()
  averageRapidRating: number;

  @ApiProperty()
  maxRapidRating: number;

  @ApiProperty()
  averageBlitzRating: number;

  @ApiProperty()
  maxBlitzRating: number;

  @ApiProperty()
  averageBulletRating: number;

  @ApiProperty()
  maxBulletRating: number;

  @ApiProperty()
  total: number;

  @ApiProperty({ type: [PlayerDto] })
  players: Player[];
}
