import { lazy } from 'react';

export default {
	path: '/songs',
	exact: true,
	public: true,
	component: lazy(() => import('./songs')),
};
