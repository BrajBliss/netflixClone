import { ArrowBackOutlined } from '@material-ui/icons';
import './watch.scss';

export default function Watch() {
	return (
		<div className='watch'>
			<div className='back'>
				<ArrowBackOutlined />
				Home
			</div>
			<video
				className='video'
				autoPlay
				progress
				controls
				src='https://player.vimeo.com/external/538575900.sd.mp4?s=fefd4e030f5065aef2f446c9c21488de3b3a65f7&profile_id=165&oauth2_token_id=57447761'
			/>
		</div>
	);
}
