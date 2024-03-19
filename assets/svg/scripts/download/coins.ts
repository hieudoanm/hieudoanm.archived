import { createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';

const API_KEY_COIN_RANKING: string = process.env.API_KEY_COIN_RANKING ?? '';
console.log(API_KEY_COIN_RANKING);
const streamPipeline = promisify(pipeline);

const main = async () => {
  const limit = 1000;
  const pages = 30000 / limit;
  for (let page = 0; page <= pages; page++) {
    console.log('page', page);
    const offset: number = page * limit;
    const url: string = `https://api.coinranking.com/v2/coins?limit=${limit}&offset=${offset}`;
    const response: Response = await fetch(url, {
      headers: { 'x-access-token': API_KEY_COIN_RANKING },
    });
    const data = await response.json();
    const coins = data?.data?.coins ?? [];
    for (const coin of coins) {
      const { symbol = '', iconUrl = '' } = coin;
      if (
        !symbol ||
        !iconUrl ||
        !iconUrl.includes('.svg') ||
        iconUrl.includes('.png')
      ) {
        continue;
      }
      const filename = symbol.toLowerCase();
      try {
        const response = await fetch(iconUrl);
        if (!response.ok) {
          throw new Error(`unexpected response ${response.statusText}`);
        }
        await streamPipeline(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          response.body as any,
          createWriteStream(`./icons/coin-${filename}.svg`)
        );
        console.log(filename, iconUrl, 'success');
      } catch (error) {
        console.error(filename, error);
      }
    }
  }
};

main().catch(console.error);
