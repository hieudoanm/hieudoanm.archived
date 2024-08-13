import { PrismaClient, Result, TimeClass, Variant } from '@prisma/client';
import axios from 'axios';
import { Chess } from 'chess.js';
import dotenv from 'dotenv';

dotenv.config();

const PUBLIC_URL: string = 'https://api.chess.com/pub';

type Game = {
  url: string;
  pgn: string;
  time_control: string;
  end_time: number;
  rated: boolean;
  tcn: string;
  uuid: string;
  initial_setup: string;
  fen: string;
  time_class: string;
  rules: string;
  accuracies: { white: number; black: number };
  white: { rating: number; result: string; username: string };
  black: { rating: number; result: string; username: string };
};

const getGames = async (archive: string): Promise<Game[]> => {
  try {
    const { data } = await axios.get<{ games: Game[] }>(archive);
    const { games = [] } = data;
    return games;
  } catch (error) {
    console.error(`getGames error=${error}`);
    return [];
  }
};

const processPGN = ({
  pgn,
  rules,
  initialSetup,
}: {
  pgn: string;
  rules: string;
  initialSetup: string;
}) => {
  let opening: string = '';
  let openingName: string = '';
  let whiteCastling = '';
  let blackCastling = '';
  let whiteKing = 0;
  let blackKing = 0;
  let whiteQueen = 0;
  let blackQueen = 0;
  let whiteRook = 0;
  let blackRook = 0;
  let whiteBishop = 0;
  let blackBishop = 0;
  let whiteKnight = 0;
  let blackKnight = 0;
  let whitePawn = 0;
  let blackPawn = 0;
  if (
    pgn &&
    ['chess', 'chess960'].includes(rules) &&
    initialSetup === 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
  ) {
    const chess = new Chess();
    chess.loadPgn(pgn);
    const header: Record<string, string> = chess.header();
    opening = header['ECO'];
    openingName = (header['ECOUrl'] ?? '').split('/').at(-1) ?? '';
    const history: string[] = chess.history();
    for (const [index, move] of Object.entries(history)) {
      if (parseInt(index) % 2 === 0) {
        if (move === 'O-O') whiteCastling = 'short';
        else if (move === 'O-O-O') whiteCastling = 'long';
        else if (move.at(0) === 'K') whiteKing += 1;
        else if (move.at(0) === 'Q') whiteQueen += 1;
        else if (move.at(0) === 'R') whiteRook += 1;
        else if (move.at(0) === 'B') whiteBishop += 1;
        else if (move.at(0) === 'N') whiteKnight += 1;
        else whitePawn += 1;
      } else if (parseInt(index) % 2 === 1) {
        if (move === 'O-O') blackCastling = 'short';
        else if (move === 'O-O-O') blackCastling = 'long';
        else if (move.at(0) === 'K') blackKing += 1;
        else if (move.at(0) === 'Q') blackQueen += 1;
        else if (move.at(0) === 'R') blackRook += 1;
        else if (move.at(0) === 'B') blackBishop += 1;
        else if (move.at(0) === 'N') blackKnight += 1;
        else blackPawn += 1;
      }
    }
  }

  return {
    opening,
    openingName,
    whiteCastling,
    whiteKing,
    whiteQueen,
    whiteRook,
    whiteBishop,
    whiteKnight,
    whitePawn,
    blackCastling,
    blackKing,
    blackQueen,
    blackRook,
    blackBishop,
    blackKnight,
    blackPawn,
  };
};

const importGame = async (
  prismaClient: PrismaClient,
  game: Game,
  retry: number = 0
) => {
  try {
    const {
      uuid,
      url,
      pgn = '',
      time_control: timeControl,
      time_class: timeClass,
      end_time: endTime,
      rated,
      tcn,
      initial_setup: initialSetup,
      rules,
      fen,
      accuracies: { white: whiteAccuracy = 0, black: blackAccuracy = 0 } = {
        white: 0,
        black: 0,
      },
      white: {
        username: whiteUsername = '',
        result: whiteResult = '',
        rating: whiteRating = 0,
      } = { username: '', result: '', rating: 0 },
      black: {
        username: blackUsername = '',
        result: blackResult = '',
        rating: blackRating = 0,
      } = { username: '', result: '', rating: 0 },
    } = game;
    const whiteResult2: Result =
      whiteResult === '50move' ? 'fiftymove' : (whiteResult as Result);
    const blackResult2: Result =
      blackResult === '50move' ? 'fiftymove' : (blackResult as Result);
    const {
      whiteCastling,
      whiteKing,
      whiteQueen,
      whiteRook,
      whiteBishop,
      whiteKnight,
      whitePawn,
      blackCastling,
      blackKing,
      blackQueen,
      blackRook,
      blackBishop,
      blackKnight,
      blackPawn,
      opening,
      openingName,
    } = processPGN({ pgn, rules, initialSetup });

    const body = {
      uuid,
      url,
      pgn,
      timeControl,
      timeClass: timeClass as TimeClass,
      endTime: new Date(endTime * 1000),
      rated,
      tcn,
      initialSetup,
      rules: rules as Variant,
      fen,
      whiteAccuracy,
      whiteUsername: whiteUsername.toLowerCase(),
      whiteRating,
      whiteResult: whiteResult2,
      blackAccuracy,
      blackUsername: blackUsername.toLowerCase(),
      blackRating,
      blackResult: blackResult2,
      whiteCastling,
      whiteKing,
      whiteQueen,
      whiteRook,
      whiteBishop,
      whiteKnight,
      whitePawn,
      blackCastling,
      blackKing,
      blackQueen,
      blackRook,
      blackBishop,
      blackKnight,
      blackPawn,
      opening,
      openingName,
    };
    await prismaClient.$connect();
    await prismaClient.game.upsert({
      create: body,
      update: body,
      where: { uuid },
    });
    await prismaClient.$disconnect();
  } catch (error) {
    if (retry === 3) {
      importGame(prismaClient, game, retry + 1);
      return;
    }
    console.error(`importGame game=${game.uuid} error=${error}`);
  }
};

const getArchives = async (prismaClient: PrismaClient, username: string) => {
  try {
    console.log(`username=${username}`);
    const archivesUrl = `${PUBLIC_URL}/player/${username}/games/archives`;
    const { data } = await axios.get<{ archives: string[] }>(archivesUrl);
    const { archives = [] } = data;
    archives.reverse();
    for (const archive of archives) {
      const games = await getGames(archive);
      console.info(`archive=${archive} games=${games.length}`);
      for (const game of games) {
        await importGame(prismaClient, game);
      }
    }
  } catch (error) {
    console.error(`getArchives error=${error}`);
  }
};

const CHESS_USERNAME = process.env.CHESS_USERNAME ?? '';

const main = async () => {
  const prismaClient = new PrismaClient();

  if (CHESS_USERNAME) {
    await getArchives(prismaClient, CHESS_USERNAME);
    return;
  }

  const usernames = [
    // { username: 'thedarkknighttrilogy', title: '' }, // Hieu Doan
    { username: 'anishgiri', title: 'gm' }, // Anish Giri
    // { username: 'azerichess', title: 'gm' }, // Shakhriyar Mamedyarov
    // { username: 'chesswarrior7197', title: 'gm' }, // Nodirbek Abdusattorov
    { username: 'chefshouse', title: 'gm' }, // Ding Liren
    // { username: 'crescentmoon2411', title: 'gm' }, // Nguyen Ngoc Truong Son
    // { username: 'danielnaroditsky', title: 'gm' }, // Daniel Naroditsky
    // { username: 'duhless', title: 'gm' }, // Daniil Dubov
    { username: 'fabianocaruana', title: 'gm' }, // Fabiano Caruana
    // { username: 'firouzja2003', title: 'gm' }, // Alireza Firouzja
    // { username: 'ghandeevam2003', title: 'gm' }, // Arjun Erigaisi
    { username: 'gmwso', title: 'gm' }, // Wesley So
    // { username: 'grischuk', title: 'gm' }, // Alexander Grischuk
    // { username: 'gukeshdommaraju', title: 'gm' }, // Gukesh D
    { username: 'hikaru', title: 'gm' }, // Hikaru Nakamura
    // { username: 'lachesisq', title: 'gm' }, // Ian Nepomniachtchi
    { username: 'levonaronian', title: 'gm' }, // Levon Aronian
    { username: 'liemle', title: 'gm' }, // Liem Le
    { username: 'lyonbeast', title: 'gm' }, // MVL
    { username: 'magnuscarlsen', title: 'gm' }, // Magnus Carlsen
    // { username: 'nihalsarin', title: 'gm' }, // Nihal Sarin
    // { username: 'polish_fighter3000', title: 'gm' }, // Jan-Krzysztof Duda
    { username: 'thevish', title: 'gm' }, // Viswanathan Anand
    // { username: 'tradjabov', title: 'gm' }, // Teimour Radjabov
    // { username: 'viditchess', title: 'gm' }, // Vidit Gujrathi
    { username: 'vincentkeymer', title: 'gm' }, // Vincent Keymer
    // { username: 'vladimirkramnik', title: 'gm' }, // Vladimir Kramnik
    // { username: 'rpragchess', title: 'gm' }, // Praggnanandhaa Rameshbabu
    { username: 'sergeykarjakin', title: 'gm' }, // Sergey Karjakin
    { username: 'wonderfultime', title: 'gm' }, // Tuan Minh Le
    // { username: 'yifan0227', title: 'gm' }, // Hou Yifan
  ];
  usernames.reverse();
  console.log(usernames.length);
  for (const { username } of usernames) {
    await getArchives(prismaClient, username);
  }
};

main();
