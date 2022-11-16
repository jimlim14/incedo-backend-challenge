import fetch from 'node-fetch';
import ObjectsToCsv from 'objects-to-csv';
import {} from 'dotenv/config';
import randomArtists from './randomArtists.json' assert {type: 'json'};

function randomArtist() {
	const randomIndex = Math.floor(Math.random() * randomArtists.artists.length);
	return randomArtists.artists[randomIndex];
}

export const searchArtist = async (artistName) => {
  try {
    const url = `https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${artistName}&api_key=${process.env.LAST_FM_API_KEY}&format=json`;
    const res = await fetch(url);
    const data = await res.json();
		console.log('-> successfully retrieved data from endpoint artist.search', data);
    
    let artistInfo = {
      name: '',
      mbid: '',
      url: '',
      image_small: '',
      image: '',
    };
    if (Object.keys(data).length !== 0) {
			const artist = data.results.artistmatches.artist[0];
			artistInfo.name = artist.name;
			artistInfo.mbid = artist.mbid;
			artistInfo.url = artist.url;
			artist.image.forEach((img) => {
				if (img.size === 'small') {
					artistInfo.image_small = img['#text'];
				} else if (img.size === 'medium') {
					artistInfo.image = img['#text'];
				}
			});
		} else {
      artistInfo.name = randomArtist();
    }
		console.log('-> successfully structured artist information');
    return [artistInfo];
  } catch (e) {
    console.error('Something is wrong with searchArtist function:', e);
  }
}

export const writeToCsv = async (arr) => {
	try {
		const csv = new ObjectsToCsv(arr);
		await csv.toDisk('./artists.csv', { append: true });
		console.log('-> successfully written artist information to CSV file.\n');
	} catch (e) {
		console.error('something is wrong writing to CSV file:', e);
	}
};