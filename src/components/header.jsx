import { faPlug } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { PageItem } from './page';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = (props) => {
	return (
		<div className='w-screen flex'>
			<img
				src='assets/logo.png'
				alt='logo'
				className='h-12 cursor-pointer'
				onClick={() => props.onItemClick(PageItem.HOME)}
			/>
			<span className='bg-[#68D0A9] w-full'></span>
			{/* <div
				onClick={() => props.onItemClick(PageItem.HOME)}
				className='cursor-pointer text-left px-4 py-4 bg-green-500 text-white font-bold'
			> */}
			{/* <FontAwesomeIcon icon={faPlug} /> */}
			{/* <span className='ml-3'>Ecochallenge</span> */}
			{/* </div> */}
		</div>
	);
};

export default Header;
