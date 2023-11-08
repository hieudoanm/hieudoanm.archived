import { readdir } from 'fs';

const main = async () => {
  readdir('icons', (error: NodeJS.ErrnoException | null, files: string[]) => {
    if (error) {
      console.error(error);
      process.exit(1);
    }
    console.log(files.length);
    process.exit(0);
  });
};

main().catch(console.error);
