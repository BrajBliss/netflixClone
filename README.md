# netflixClone

Build entirely on the MERN stack (npm), a full Netflix Clone

## Installation

### Find and install the dependencies inside client and server sides' `package.json`

### In `.env` file inside server, put

```
MONGO_URL = YourDatabaseConnectionUrl
SECRET_KEY = YourSecretKey for CryptoJS
```

### Firebase

Do not install the latest firebase using `npm i firebase` or else you will get into trouble with the firebase.js file. Instead use `npm i firebase@8.7.1`.

### If you are using full token @ `Bearer accessToken` then make sure to replaces your full token everytime you log in using the loginApi otherwise you will not be authorized

> Started on 5th October (README update soon)
> ATM: working on firebase
