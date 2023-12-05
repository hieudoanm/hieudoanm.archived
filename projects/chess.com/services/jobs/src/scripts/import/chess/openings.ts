import { PrismaClient } from '@prisma/client';
import axios from 'axios';
import { Chess } from 'chess.js';
import { logger } from '../../../common/log';
import { chunk } from '../../../common/utils/chunk';
import openings from '../../../json/openings.json';

const prismaClient = new PrismaClient();

const getCentipawn = async (fen: string): Promise<number> => {
  const url = 'https://chessanalysisapi.vercel.app/api/analyse/fen';
  try {
    const requestData = JSON.stringify({ fen });
    const config = {
      method: 'post',
      maxBodyLength: Number.POSITIVE_INFINITY,
      url: 'https://chessanalysisapi.vercel.app/api/analyse/fen',
      headers: { 'Content-Type': 'application/json' },
      data: requestData
    };
    const { data } = await axios.request<{ centipawn: number }>(config);
    return data.centipawn ?? 0;
  } catch (error) {
    logger.error(`getCentipawn url=${url} error=${error}`);
    return 0;
  }
};

const main = async () => {
  const d = new Date();
  openings.reverse();
  for (const opening of openings) {
    const { eco, name, pgn } = opening;
    const moves: string[][] = chunk(pgn.split(' '), 3);
    const firstMove: string = moves[0][1];
    const chess = new Chess();
    chess.loadPgn(pgn);
    const fen: string = chess.fen();
    const centipawn = await getCentipawn(fen);
    logger.info({ eco, name, pgn, firstMove, fen, centipawn });
    const data = {
      eco,
      name,
      pgn,
      firstMove,
      fen,
      centipawn,
      createdAt: d,
      updatedAt: d
    };
    await prismaClient.opening.upsert({
      create: data,
      update: data,
      // eslint-disable-next-line camelcase
      where: { eco_name_pgn: { eco, name, pgn } }
    });
  }
};

main();
