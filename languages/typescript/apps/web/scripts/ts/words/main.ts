import axios from 'axios';
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';

const main = async () => {
  const languages: string[] = [
    'arabic',
    'chinese',
    'dutch',
    'english',
    'french',
    'german',
    'hebrew',
    'italian',
    'japanese',
    'korean',
    'spanish',
    'vietnamese',
  ];
  for (const language of languages) {
    try {
      console.log(language);
      const url = `https://raw.githubusercontent.com/oprogramador/most-common-words-by-language/master/src/resources/${language}.txt`;
      const response = await axios.get<string>(url);
      const { data } = response;
      const words: string[] = data
        .split('\n')
        .filter((word: string) => word !== '')
        .sort((a, b) => (a > b ? 1 : -1));
      const folder: string = `./src/json/languages/${language}`;
      if (!existsSync(folder)) mkdirSync(folder);
      const filename: string = `${folder}/words.json`;
      writeFileSync(filename, JSON.stringify(words, null, 2));
    } catch (error) {
      console.error(language, error);
    }
  }
};

main();
