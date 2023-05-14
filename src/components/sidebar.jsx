import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { PageItem } from './page';
import ListItem from './listitem';

import {
	faMap,
	faHome,
	faM,
	faAward,
	faPeopleGroup,
	faH,
	faPlug,
	faClockRotateLeft,
	faReceipt,
	faSeedling,
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = (props) => {
	const handleSidebarItemClick = (selectedPage) => {
		props.onItemClick(selectedPage);
	};

	return (
		<>
			<aside
				id='default-sidebar'
				className='top-0 left-0 z-40 w-64 min-h-screen transition-transform -translate-x-full sm:translate-x-0'
				aria-label='Sidebar'
			>
				<div className='h-full w-64 bg-gray-50 dark:bg-gray-800'>
					<ul className='space-y-2 font-medium'>
						{/* <li
							onClick={() =>
								handleSidebarItemClick(PageItem.HOME)
							}
							className='cursor-pointer text-left px-4 py-4 bg-green-500 text-white font-bold'
						>
							<FontAwesomeIcon icon={faPlug} />
							<span className='ml-3'>Ecochallenge</span>
						</li> */}
						{/* <ListItem
							onItemClick={handleSidebarItemClick}
							name={PageItem.HOME}
							icon={faHome}
						/> */}
						<ListItem
							onItemClick={handleSidebarItemClick}
							name={PageItem.QUESTS}
							icon={faMap}
						/>
						<ListItem
							onItemClick={handleSidebarItemClick}
							name={PageItem.LEADERBOARD}
							icon={faAward}
						/>
						<ListItem
							onItemClick={handleSidebarItemClick}
							name={PageItem.COMMUNITY}
							icon={faPeopleGroup}
						/>
						<ListItem
							onItemClick={handleSidebarItemClick}
							name={PageItem.REPORTS}
							icon={faReceipt}
						/>
						<ListItem
							onItemClick={handleSidebarItemClick}
							name={PageItem.HISTORY}
							icon={faClockRotateLeft}
						/>
						<ListItem
							onItemClick={handleSidebarItemClick}
							name={PageItem.SUSTAINABILITY}
							icon={faSeedling}
						/>
					</ul>
				</div>
			</aside>
		</>
	);
};

export default Sidebar;
