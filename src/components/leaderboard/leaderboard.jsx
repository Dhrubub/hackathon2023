import React, { useState } from 'react';
import LeaderboardItem from './leaderboarditem';

const Leaderboard = () => {
	const [quests, setQuests] = useState([
		'Crawley',
		'Canning Vale',
		'Parkwood',
		'Clarkson',
		'Willetton',
	]);
	return (
		<div className=''>
			<ul className='overflow-y-auto w-full'>
				<li className='text-gray-500'>Leaderboard</li>
				{quests.map((q, id) => (
					<LeaderboardItem key={id} rank={id} description={q} />
				))}
			</ul>
		</div>
	);
};

export default Leaderboard;
