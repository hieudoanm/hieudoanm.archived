import { Opening } from '@prisma/client';
import openings from '@web/json/chess/theory/openings.json';
import { AppLayout } from '@web/layout/AppLayout';
import { copyToClipboard } from '@web/utils/copy';
import { sleep } from '@web/utils/sleep';
import { Chess } from 'chess.js';
import { FC, useState } from 'react';
import { Chessboard } from 'react-chessboard';
import { FaCopy } from 'react-icons/fa';

const Openings: FC<{ makeMoves: (pgn: string) => void }> = ({
  makeMoves = (pgn: string) => pgn,
}) => {
  const [selectedPgn, setSelectedPgn] = useState<string>('');

  return (
    <div className='overflow-hidden rounded-xl border border-base-content'>
      <table className='table'>
        <tr>
          <td>Openings ({openings.length})</td>
        </tr>
        {openings.map(({ eco = '', name = '', pgn = '' }: Partial<Opening>) => {
          return (
            <tr
              key={`${eco}-${name}`}
              className={`border-t border-base-content ${selectedPgn === pgn ? 'bg-primary text-secondary' : ''}`}>
              <td
                onClick={() => {
                  setSelectedPgn(pgn);
                  makeMoves(pgn);
                }}
                className='cursor-pointer'>
                <p className='whitespace-nowrap' title={name}>
                  {eco} - {name}
                </p>
                <p className='whitespace-nowrap' title={pgn}>
                  {pgn}
                </p>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

const INITIAL_FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';

export const ChessOpenings: FC = () => {
  const [position, setPosition] = useState<{ fen: string; pgn: string }>({
    fen: INITIAL_FEN,
    pgn: '',
  });

  const makeMoves = async (pgn: string) => {
    const game = new Chess();
    const moves: string[] = pgn
      .split(' ')
      .filter((_, index: number) => index % 3 !== 0);
    for (const move of moves) {
      await sleep(1000);
      game.move(move);
      setPosition({ fen: game.fen(), pgn: game.pgn() });
    }
  };

  return (
    <AppLayout nav full>
      <div className='container mx-auto h-full'>
        <div className='h-full p-4 md:p-8'>
          <div className='grid h-full grid-cols-1 gap-2 md:grid-cols-7 md:gap-4'>
            <div className='col-span-1 flex items-center md:col-span-3'>
              <div className='w-full overflow-hidden rounded-xl border border-base-content'>
                <div className='flex items-center justify-center gap-x-2 p-2'>
                  <p className='truncate text-xs' title={position.fen}>
                    {position.fen}
                  </p>
                  <FaCopy
                    className='cursor-pointer'
                    onClick={() => copyToClipboard(position.fen)}
                  />
                </div>
                <Chessboard position={position.fen} />
                <div className='flex items-center justify-center gap-x-2 p-2'>
                  <p className='truncate text-xs' title={position.pgn}>
                    {position.pgn}
                  </p>
                  <FaCopy
                    className='cursor-pointer'
                    onClick={() => copyToClipboard(position.pgn)}
                  />
                </div>
              </div>
            </div>
            <div className='col-span-1 overflow-hidden md:col-span-4'>
              <div className='h-full overflow-auto'>
                <Openings makeMoves={makeMoves} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};
