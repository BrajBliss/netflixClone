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
							token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjQwNDhlNTBhYjVjYjJiMDU1ZDY2YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNDMxMTk1OCwiZXhwIjo4ODAzNDIyNTU1OH0.gSAn89h0KC00ObXfiVO--sIQT7BFHZl4SRuEsQ4Btzs',
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
			<Featured type={type} setGenre={setGenre}/>
			{lists.map((list) => (
				<List list={list} />
			))}
		</div>
	);
};

export default Home;
