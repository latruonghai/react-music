import { lazy } from 'react';

export default {
	path: '/play-list',
	exact: true,
	public: true,
	component: lazy(() => import('./play-list')),
};
