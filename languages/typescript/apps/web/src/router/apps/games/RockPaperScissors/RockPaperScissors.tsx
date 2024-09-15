import { useState } from 'react';

export type RockPaperScissors = '🪨' | '📜' | '✂️';

export const RockPaperScissors = () => {
  const rockPaperScissors: RockPaperScissors[] = ['🪨', '📜', '✂️'];
  const [game, setGame] = useState<{
    win: number;
    draw: number;
    loss: number;
    player: RockPaperScissors;
    opponent: RockPaperScissors;
  }>({ win: 0, draw: 0, loss: 0, player: '🪨', opponent: '🪨' });

  const play = (player: RockPaperScissors) => {
    let { win = 0, draw = 0, loss = 0 } = game;
    const max: number = 2;
    const min: number = 0;
    const index = Math.floor(Math.random() * (max - min + 1) + min);
    const opponent = rockPaperScissors[index];
    if (player === opponent) {
      draw += 1;
    } else if (
      (player === '🪨' && opponent === '✂️') ||
      (player === '✂️' && opponent === '📜') ||
      (player === '📜' && opponent === '🪨')
    ) {
      win += 1;
    } else {
      loss += 1;
    }
    setGame({ win, draw, loss, player, opponent });
  };

  const total: number = game.win + game.draw + game.loss;

  return (
    <div className='grid grid-cols-3 gap-8'>
      <div className='col-span-3'>
        <div className='w-full text-center text-4xl md:text-9xl'>
          {game.opponent}
        </div>
      </div>
      <div className='col-span-3 text-center text-xl md:text-4xl'>
        <p>
          {game.win} / {game.draw} / {game.loss}
        </p>
        {total ? (
          <p>
            {((game.win / total) * 100).toFixed(2)}% /{' '}
            {((game.draw / total) * 100).toFixed(2)}% /{' '}
            {((game.loss / total) * 100).toFixed(2)}%
          </p>
        ) : (
          <></>
        )}
        <p>(W / D / L)</p>
      </div>
      {rockPaperScissors.map((value: RockPaperScissors) => {
        return (
          <div key={value} className='col-span-1'>
            <div
              className='w-full cursor-pointer text-center text-4xl md:text-9xl'
              onClick={() => play(value)}>
              {value}
            </div>
          </div>
        );
      })}
    </div>
  );
};
