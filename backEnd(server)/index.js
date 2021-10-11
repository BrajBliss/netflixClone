const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => console.log('DB Connection Successful'))
	.catch((err) => {
		console.error(err);
	});

app.listen(8800, () => {
	console.log('BackEnd server is running');
});
