import * as readline from 'node:readline/promises';
import { searchArtist } from './helper.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const artistName = await rl.question('Enter artist name: ');

rl.close();


const artistInfo = await searchArtist(artistName);

console.log(artistInfo);