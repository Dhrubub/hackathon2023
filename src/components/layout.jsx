import React, { useState } from 'react';
import Sidebar from './sidebar';
import Page, { PageItem } from './page';
import Header from './header';

const Layout = () => {
	const [currentPage, setCurrentPage] = useState(PageItem.HOME);

	const handleSidebarItemClick = (selectedPage) => {
		setCurrentPage(selectedPage);
	};

	return (
		<div className='flex flex-col h-screen'>
			<Header onItemClick={handleSidebarItemClick} />
			<div className='flex flex-grow'>
				<Sidebar onItemClick={handleSidebarItemClick} />
				<Page currentPage={currentPage} />
			</div>
		</div>
	);
};

export default Layout;
