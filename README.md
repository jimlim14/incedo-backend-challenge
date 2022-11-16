# incedo-backend-challenge

This is a Incedo Backend Challenge built with [Node.Js](https://nodejs.org/en/).<br />
Extra dependencies used for this challenge:
* [dotenv](https://www.npmjs.com/package/dotenv)
* [node-fetch](https://www.npmjs.com/package/node-fetch)
* [objects-to-csv](https://www.npmjs.com/package/objects-to-csv)

## Instructions

Write a Node.js REST API application that handles the following:

* Search for an artist by name based on the following endpoint [artist.search](https://www.last.fm/api/show/artist.search), return all the results for this artist.
* Writes the result to a user-supplied CSV filename.
* The CSV file should include the following information (name, mbid, url, image_small, image)

-> If no results returned from the [artist.search](https://www.last.fm/api/show/artist.search) endpoint, retrieve random artist names from a JSON dictionary source file for example:

['artistName1', 'artistName2', 'artistName3']

Repeat as necessary until you have gathered a list of artists.

_Though this is a small app, please pay attention to your application structure.
Host your code on github or bitbucket and include a README with instructions on
how to install and run your application._

### GETTING STARTED

First, clone this repository, cd to project's directory and install the dependencies either by npm or yarn:

```bash
git clone https://github.com/jimlim14/incedo-backend-challenge.git
cd incedo-backend-challenge

npm install
or
yarn install
```

Simply run the code below to begin searching for an artist:

```bash
node index.js
```

Searh your artist by typing the name directly on the prompt.

The question will be repeated after each search but if you wish to exit the program, simply key in 'n' and press enter to do so.
