import { ApiProperty } from '@nestjs/swagger';
import { Opening } from '@prisma/client';
import { OpeningDto } from '../../../generated/dto/opening.entity';

export class OpeningsResponseDto {
  @ApiProperty()
  total: number;

  @ApiProperty({ type: [OpeningDto] })
  openings: Opening[];
}

export class EcosResponseDto {
  @ApiProperty()
  total: number;

  @ApiProperty()
  ecos: string[];
}
