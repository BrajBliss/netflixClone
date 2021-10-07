import React from 'react';
import './watch.scss';
import { ArrowBackIosOutlined } from '@material-ui/icons';

const Watch = () => {
	return (
		<div className='watch'>
			<div className='back'>
				<ArrowBackIosOutlined />
				Home
			</div>
			<video
				className='video'
				autoPlay
				progress
				controls
				src='https://vod-progressive.akamaized.net/exp=1633620047~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2715%2F21%2F538575900%2F2552393707.mp4~hmac=70032c536d39008ec41a8fb4abb18b22c9178cdb922db07ba82c3e83eec2211d/vimeo-prod-skyfire-std-us/01/2715/21/538575900/2552393707.mp4?filename=pexels-mart-production-7565881.mp4'
			/>
		</div>
	);
};

export default Watch;
