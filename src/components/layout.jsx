import React, { useState } from 'react';
import Sidebar from './sidebar';
import Page from './page';

const Layout = () => {
	const [currentPage, setCurrentPage] = useState('home');

	const handleSidebarItemClick = (selectedPage) => {
		setCurrentPage(selectedPage);
	};

	return (
		<div className='layout-container'>
			<Sidebar onItemClick={handleSidebarItemClick} />
			<Page currentPage={currentPage} />
		</div>
	);
};

export default Layout;
