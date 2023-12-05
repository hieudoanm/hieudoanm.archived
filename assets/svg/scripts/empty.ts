import { readdir, readFileSync } from 'fs';

const main = async () => {
  readdir('icons', (error: NodeJS.ErrnoException | null, files: string[]) => {
    if (error) {
      console.error(error);
      process.exit(1);
    }
    const empty = files.filter((file: string) => {
      const content: string = readFileSync(`./icons/${file}`, 'utf-8');
      return content.trim().length === 0;
    });
    console.log(empty.length, JSON.stringify(empty, null, 2));
  });
};

main().catch(console.error);
