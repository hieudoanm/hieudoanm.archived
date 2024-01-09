export type PieceSymbol = 'K' | 'Q' | 'R' | 'B' | 'N';

export type Evaluation =
  | 'blunder'
  | 'mistake'
  | 'dubious'
  | 'interesting'
  | 'good'
  | 'brilliant';
export type EvaluationSymbol = '??' | '?' | '?!' | '!?' | '!' | '!!';

export type File = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h';
export type Rank = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
