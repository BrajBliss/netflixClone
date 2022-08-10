# Netflix Clone

Build entirely on the MERN stack, a full Netflix Clone. Firebase for storing all metadata like movies, shows, trailers, covers.
> Hosting this project SOON!

## Features of the Netflix Client
- Register
- Sign Up
- Movies and Series
- Movie/Series Lists
- Genre Selection
- Random Featured Movie
- Video Player
- Hover and see trailer
- Meta details on hovering like age limit, release date and more

## Features of the Admin Dashboard
- Uploading new movies and series
- Managing users and content
- Delete existing content and users
- Same functions with lists
- Graphs and other data

## Preview

https://user-images.githubusercontent.com/50140643/137589982-7fef74c2-5b4f-48f7-833e-8193f584f5da.mp4

## Installation

### Dependencies
Install from the list inside `package.json` for both client and server sides

### Managing Firebase

Don't install `npm i firebase`

Use `npm i firebase@8.7.1`

### Tokens 
If you are using full token @ `Bearer accessToken` then make sure to replace your accessToken everytime you log in using the loginApi otherwise you will not be authorized

### In `.env` file inside server, put

```
MONGO_URL = YourDatabaseConnectionUrl
SECRET_KEY = YourSecretKey for CryptoJS
``` 

> Credit: LamaDev(YT)
