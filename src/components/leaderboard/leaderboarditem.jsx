import React from 'react';

const LeaderboardItem = (props) => {
	return (
		<div>
			<div
				className={`shadow-md rounded-lg m-1 flex flex-row ${
					props.rank === 0
						? 'bg-yellow-400'
						: props.rank === 1
						? 'bg-neutral-400'
						: props.rank === 2
						? 'bg-yellow-600'
						: ''
				}`}
			>
				{/* <FontAwesomeIcon icon={} className='m-auto' /> */}
				<div className='truncate p-4'>{props.description}</div>
			</div>
		</div>
	);
};

export default LeaderboardItem;
