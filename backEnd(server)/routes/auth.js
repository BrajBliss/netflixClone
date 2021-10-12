const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

// Register
router.post('/register', async (req, res) => {
	const { username, email, password } = req.body;
	const newUser = new User({
		username: username,
		email: email,
		password: CryptoJS.AES.encrypt(
			password,
			process.env.SECRET_KEY
		).toString(),
	});

	try {
		const user = await newUser.save();
		res.json(user);
	} catch (err) {
		res.status(500).json(err);
	}
});

// Login
router.post('/login', async (req, res) => {
	const { email } = req.body;
	try {
		const user = await User.findOne({ email: email });
		!user && res.status(401).json('Wrong password or username!');

		const bytes = CryptoJS.AES.decrypt(
			user.password,
			process.env.SECRET_KEY
		);
		const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

		originalPassword !== req.body.password &&
			res.status(401).json('Wrong password or username!');

		const accessToken = jwt.sign(
			{
				id: user._id,
				isAdmin: user.isAdmin,
			},
			process.env.SECRET_KEY,
			{ expiresIn: '999999d' }
		);

		const { password, ...info } = user._doc;
		res.status(200).json({ ...info, accessToken });
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
