import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const QuestItem = (props) => {
	return (
		<div className='bg-green-500 rounded-lg m-1 flex flex-row'>
			<div
				className='cursor-pointer rounded-tl-lg rounded-bl-lg bg-gray-50 border border-green-500 p-4'
				onClick={() => props.onComplete()}
			>
				<FontAwesomeIcon icon={faCheck} className='m-auto' />
			</div>
			<div className='truncate p-4'>{props.description}</div>
		</div>
	);
};

export default QuestItem;
