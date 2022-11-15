import fetch from 'node-fetch';
import ObjectsToCsv from 'objects-to-csv';
import {} from 'dotenv/config';

export const searchArtist = async (artistName) => {
  try {
    const url = `https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${artistName}&api_key=${process.env.LAST_FM_API_KEY}&format=json`;
    const res = await fetch(url);
    const data = await res.json();
    const artists = data.results.artistmatches.artist;

    let artistInfo = {};
    for (const artist of artists) {
      if (artist.name.toLowerCase() === artistName.toLowerCase()) {
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
        break;
      }
    }
    return [artistInfo];
  } catch (e) {
    console.error('Something is wrong with searchArtist function:', e);
  }
}

export const writeToCsv = async (arr) => {
	try {
		const csv = new ObjectsToCsv(arr);
		await csv.toDisk('./artists.csv', { append: true });
		console.log('successfully written information to CSV file.');
	} catch (e) {
		console.error('something is wrong writing to CSV file:', e);
	}
};