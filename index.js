import {} from 'dotenv/config';
import * as readline from 'node:readline/promises';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

await rl.question('Enter artist name: ');

rl.close();