import * as readline from 'node:readline/promises';
import { searchArtist, writeToCsv } from './helper.js';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

while (true) {
	const answer = await rl.question('Enter an artist (press n to exit): ');
		
	if (answer === 'n') {
		rl.close();
		process.exit(0);
	} else {
		const artistInfo = await searchArtist(answer);
		await writeToCsv(artistInfo);
	}
}


