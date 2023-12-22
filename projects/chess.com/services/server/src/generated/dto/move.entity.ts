import { Piece, Side } from '@prisma/client';
import { GameDto } from './game.entity';

export class MoveDto {
  game?: GameDto;
  gameId: string;
  fen: string;
  number: number;
  annotation: string;
  piece: Piece;
  side: Side;
  captured: boolean;
  castling: boolean;
  promote: boolean;
  promoteTo: Piece | null;
  check: boolean;
  checkmate: boolean;
  createdAt: Date | null;
  updatedAt: Date | null;
}
