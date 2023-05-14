import React from 'react';
import Dashboard from './pages/dashboard';
import Quests from './pages/quests';
import Leaderboard from './pages/leaderboard';

export const PageItem = {
	HOME: 'Home',
	QUESTS: 'Quests',
	LEADERBOARD: 'Leaderboard',
	COMMUNITY: 'Community',
	REPORTS: 'Reports',
	HISTORY: 'History',
	SUSTAINABILITY: 'Sustainability Fund',
};

const Page = ({ currentPage }) => {
	let ComponentToRender;

	console.log(currentPage);

	switch (currentPage) {
		case PageItem.HOME:
			ComponentToRender = Dashboard;
			break;
		case PageItem.QUESTS:
			ComponentToRender = Quests;
			break;
		case PageItem.LEADERBOARD:
			ComponentToRender = Leaderboard;
			break;
		default:
			ComponentToRender = () => <div>Not Found</div>;
			break;
	}

	return <ComponentToRender />;
};

export default Page;
