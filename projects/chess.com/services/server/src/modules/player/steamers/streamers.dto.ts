import { ApiProperty } from '@nestjs/swagger';
import { Player } from '@prisma/client';
import { PlayerDto } from '../../../generated/dto/player.entity';

export class CountryDto {
  @ApiProperty()
  countryCode: string;

  @ApiProperty()
  country: string;
}

export class StreamersResponseDto {
  @ApiProperty()
  total: number;

  @ApiProperty({ type: [PlayerDto] })
  players: Player[];

  @ApiProperty({ type: [CountryDto] })
  countries: CountryDto[];
}
