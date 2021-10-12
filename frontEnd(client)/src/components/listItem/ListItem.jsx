import './listItem.scss';
import {
	PlayArrow,
	Add,
	ThumbUpAltOutlined,
	ThumbDownOutlined,
} from '@material-ui/icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ListItem({ index, item }) {
	const [isHovered, setIsHovered] = useState(false);
	const [movie, setMovie] = useState({});

	useEffect(() => {
		const getMovie = async () => {
			try {
				const res = await axios.get('/movies/find/' + item, {
					headers: {
						token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjQwNDhlNTBhYjVjYjJiMDU1ZDY2YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNDA1MDE2MywiZXhwIjoxNjM0NTY4NTYzfQ.FJhD_ZFWmrHp6r-koP_Fa_uJj85-XwrK4WL7tgCX4hA',
					},
				});
				setMovie(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		getMovie();
	}, [item]);

	return (
		<Link to={{ pathname: '/watch', movie: movie }}>
			<div
				className='listItem'
				style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}>
				<img src={movie?.imgSm} alt='' />
				{isHovered && (
					<>
						<video src={movie.trailer} autoPlay={true} loop />
						<div className='itemInfo'>
							<div className='icons'>
								<PlayArrow className='icon' />
								<Add className='icon' />
								<ThumbUpAltOutlined className='icon' />
								<ThumbDownOutlined className='icon' />
							</div>
							<div className='itemInfoTop'>
								<span>{movie.duration}</span>
								<span className='limit'>+{movie.limit}</span>
								<span>{movie.year}</span>
							</div>
							<div className='desc'>{movie.desc}</div>
							<div className='genre'>{movie.genre}</div>
						</div>
					</>
				)}
			</div>
		</Link>
	);
}
