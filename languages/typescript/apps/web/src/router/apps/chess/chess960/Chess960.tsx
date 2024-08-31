import chess960Positions from '@web/json/chess/chess960/positions.json';
import { Layout } from '@web/layout';
import { copyToClipboard } from '@web/utils/copy';
import { Dispatch, FC, SetStateAction, useState } from 'react';
import { Chessboard } from 'react-chessboard';
import {
  FaChessBishop,
  FaChessKing,
  FaChessKnight,
  FaChessQueen,
  FaChessRook,
  FaCopy,
} from 'react-icons/fa6';

type Piece = 'K' | 'Q' | 'R' | 'B' | 'N';

const order = ['K', 'Q', 'R', 'B', 'N'];

const piecesMap: Record<Piece, string> = {
  K: 'King',
  Q: 'Queen',
  R: 'Rook',
  B: 'Bishop',
  N: 'Knight',
};

const pieceIcons: Record<Piece, unknown> = {
  K: <FaChessKing />,
  Q: <FaChessQueen />,
  R: <FaChessRook />,
  B: <FaChessBishop />,
  N: <FaChessKnight />,
};

const Positions: FC<{
  initialPosition: string;
  setInitialPosition: Dispatch<SetStateAction<string>>;
}> = ({ initialPosition, setInitialPosition }) => {
  const pieces: Piece[] = [
    ...new Set(
      chess960Positions
        .map((position: string) => position.at(0) as Piece)
        .filter((position: string) => typeof position !== 'undefined')
    ),
  ];
  const positionsByPieces = pieces.map((piece: Piece) => {
    return {
      piece,
      positions: chess960Positions.filter(
        (position) => position.at(0) === piece
      ),
    };
  });

  const onClickPosition = (position: string) => {
    const lowerPosition: string = position.toLowerCase();
    const newFen: string = `${lowerPosition}/pppppppp/8/8/8/8/PPPPPPPP/${position}`;
    setInitialPosition(() => newFen);
  };

  return (
    <div className='flex flex-col gap-y-4'>
      {positionsByPieces.map(({ piece, positions = [] }) => {
        return (
          <div key={piece} className='flex flex-col gap-y-4'>
            <p className='text-center'>
              {piecesMap[piece]} ({positions.length})
            </p>
            <div className='grid h-full grid-cols-2 items-center gap-4 md:grid-cols-4'>
              {positions.map((position: string) => {
                const pieces: Piece[] = position.split('') as Piece[];
                return (
                  <div key={position} className='col-span-1'>
                    <div
                      className={`${initialPosition.split('/').at(0)?.toUpperCase() === position ? 'rounded-xl border border-base-content p-1' : ''}`}>
                      <div
                        title={position}
                        className='flex cursor-pointer items-center justify-center'
                        onClick={() => {
                          onClickPosition(position);
                        }}>
                        {pieces.map((piece: Piece) => (
                          <>{pieceIcons[piece]}</>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const DEFAULT_FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';

export const Chess960: FC = () => {
  const [initialPosition, setInitialPosition] = useState<string>(DEFAULT_FEN);

  return (
    <Layout nav full>
      <div className='container mx-auto h-full'>
        <div className='h-full p-4 md:p-8'>
          <div className='grid h-full grid-cols-1 gap-2 md:grid-cols-5 md:gap-4'>
            <div className='col-span-1 flex items-center md:col-span-2'>
              <div className='w-full overflow-hidden rounded-xl border border-base-content'>
                <div className='flex items-center justify-center gap-x-2 py-2'>
                  <p className='text-sm'>{initialPosition}</p>
                  <FaCopy
                    className='cursor-pointer'
                    onClick={() => copyToClipboard(initialPosition)}
                  />
                </div>
                <Chessboard position={initialPosition} />
              </div>
            </div>
            <div className='col-span-1 overflow-hidden md:col-span-3'>
              <div className='h-full overflow-auto'>
                <Positions
                  initialPosition={initialPosition}
                  setInitialPosition={setInitialPosition}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
