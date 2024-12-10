#!/usr/bin/env node

import { Command } from 'commander';
import figlet from 'figlet';

console.log(figlet('HIEU DOAN'));

const program = new Command();

// Define the CLI version and description
const version = '0.0.1';
program
  .version(version)
  .description('A sample CLI built with TypeScript')
  .option('-i, --info', 'Get Info');

const options = program.opts();

if (options.v || options.version) {
  console.log(version);
}

program
  .command('hello')
  .description('Hello World!')
  .action(() => {
    console.log('Hello World!');
  });

program
  .command('date')
  .description('Get Date')
  .action(() => {
    const [date] = new Date().toISOString().split('T');
    console.log(date);
  });

program
  .command('time')
  .description('Get Time')
  .action(() => {
    const [, time] = new Date().toISOString().split('T');
    console.log(time);
  });

program.parse(process.argv);
