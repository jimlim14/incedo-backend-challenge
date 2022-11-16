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

Search your artist by typing the name directly on the prompt and press enter like so:

<img width="401" alt="Screenshot 2022-11-16 at 16 29 38" src="https://user-images.githubusercontent.com/88963740/202222988-47928338-35b7-417c-a6a6-6540907cbc2e.png">

Two logs will follow if nothing happens and there will be a prompt asking for user to enter a filename, remember to include .csv after:

<img width="420" alt="Screenshot 2022-11-16 at 16 33 30" src="https://user-images.githubusercontent.com/88963740/202223801-61f02406-3949-4db2-8e69-cfc47bcdf3ab.png">

The question will be repeated after each search but if you wish to exit the program, simply key in 'n' and press enter to do so.
