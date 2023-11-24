import { Piece } from '@prisma/client';
import { File, PieceSymbol, Rank } from './games.types';
// Piece
export const PIECE_LIST: Piece[] = [
  'king',
  'queen',
  'bishop',
  'knight',
  'pawn',
];
export const PIECE_SYMBOL_LIST: PieceSymbol[] = ['K', 'Q', 'R', 'B', 'N'];
export const PIECE_MAP: Record<PieceSymbol, Piece> = {
  K: 'king',
  Q: 'queen',
  R: 'rook',
  B: 'bishop',
  N: 'knight',
};
// Chess Board
export const FILE_LIST: File[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
export const RANK_LIST: Rank[] = ['1', '2', '3', '4', '5', '6', '7', '8'];
// Results
export const WIN_RESULTS: string[] = ['win'];
export const DRAW_RESULTS: string[] = [
  '50move',
  'agreed',
  'insufficient',
  'repetition',
  'stalemate',
  'timevsinsufficient',
];
export const LOSS_RESULTS: string[] = [
  'checkmated',
  'resigned',
  'timeout',
  'abandoned',
];
