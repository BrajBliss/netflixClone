import './home.scss';
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = ({ type }) => {
	const [lists, setLists] = useState([]);
	const [genre, setGenre] = useState(null);
	useEffect(() => {
		const getRandomLists = async () => {
			try {
				const res = await axios.get(
					`lists${type ? '?type' + type : ''}${
						genre ? '&genre=' + genre : ''
					}`,
					{
						headers: {
							token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjQwNDhlNTBhYjVjYjJiMDU1ZDY2YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNDEyOTYxNywiZXhwIjo4ODAzNDA0MzIxN30.vNGNUXd6Mx_UKCHIHH8BYnNsGXe0w9QAGubgH60MkDI',
						},
					}
				);
				setLists(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		getRandomLists();
	}, [type, genre]);
	return (
		<div className='home'>
			<Navbar />
			<Featured type={type} />
			{lists.map((list) => (
				<List list={list} />
			))}
		</div>
	);
};

export default Home;
