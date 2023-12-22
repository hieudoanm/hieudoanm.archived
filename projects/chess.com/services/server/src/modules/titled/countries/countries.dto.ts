import { ApiProperty } from '@nestjs/swagger';
import { PlayerDto } from 'src/generated/dto/player.entity';

export class CountryResponseDto {
  countryCode: string;
  country: string;
  total: string;
}

export class TitleDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  total: number;
}

export class CountriesResponseDto {
  @ApiProperty()
  averageRapidRating: number;

  @ApiProperty()
  averageBlitzRating: number;

  @ApiProperty()
  averageBulletRating: number;

  @ApiProperty()
  maxRapidRating: number;

  @ApiProperty()
  maxBlitzRating: number;

  @ApiProperty()
  maxBulletRating: number;

  @ApiProperty()
  total: number;

  @ApiProperty({ type: [PlayerDto] })
  players: PlayerDto[];

  @ApiProperty({ type: [TitleDto] })
  titles: TitleDto[];
}
