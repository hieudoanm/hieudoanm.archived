import dotenv from 'dotenv';
import { createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';

dotenv.config();

const streamPipeline = promisify(pipeline);

const main = async () => {
  const url: string = `https://restcountries.com/v3.1/all?fields=cca3,flags`;
  const response: Response = await fetch(url);
  const countries = await response.json();
  for (const country of countries) {
    const { cca3 = '', flags = {} } = country;
    const { svg = '' } = flags;
    if (!cca3 || !svg || !svg.includes('.svg')) continue;
    const filename = cca3.toLowerCase();
    try {
      const response = await fetch(svg);
      if (!response.ok)
        throw new Error(`unexpected response ${response.statusText}`);
      await streamPipeline(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        response.body as any,
        createWriteStream(`./icons/country-${filename}.svg`)
      );
      console.log(filename, 'success');
    } catch (error) {
      console.error(filename, error);
    }
  }
};

main().catch(console.error);
