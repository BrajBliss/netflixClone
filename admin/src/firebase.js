import firebase from 'firebase';

const firebaseConfig = {
	apiKey: process.env.APP_KEY,
	authDomain: 'netflixclone-14cf4.firebaseapp.com',
	projectId: 'netflixclone-14cf4',
	storageBucket: 'netflixclone-14cf4.appspot.com',
	messagingSenderId: '573175089123',
	appId: '1:573175089123:web:fb097c161f23b54e5882d6',
	measurementId: 'G-P8VE2M94ET',
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
