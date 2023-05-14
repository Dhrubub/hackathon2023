import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ListItem = (props) => {
	return (
		<li
			onClick={() => props.onItemClick(props.name)}
			className='cursor-pointer text-left px-4 py-2'
		>
			<FontAwesomeIcon icon={props.icon} />
			<span className='ml-3'>{props.name}</span>
		</li>
	);
};

export default ListItem;
