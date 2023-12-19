import { Piece, Side } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateMoveDto {
  @ApiProperty({ enum: Piece })
  piece?: Piece;
  @ApiProperty({ enum: Side })
  side?: Side;
  @ApiProperty({ enum: Piece })
  promoteTo?: Piece;
  createdAt?: Date;
}
