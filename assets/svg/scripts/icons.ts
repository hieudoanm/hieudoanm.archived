import { readdir, writeFileSync } from 'fs';

const main = async () => {
  readdir('icons', (error: NodeJS.ErrnoException | null, files: string[]) => {
    if (error) {
      console.error(error);
      process.exit(1);
    }
    const icons: { name: string; url: string }[] = files.map((name: string) => {
      const url = `https://raw.githubusercontent.com/houseofsvg/houseofsvg/master/icons/${name}`;
      return { name, url };
    });
    const total: number = icons.length;
    writeFileSync(
      './data/icons.json',
      JSON.stringify({ total, icons }, null, 2)
    );
  });
};

main().catch(console.error);
