import { lazy } from 'react';

export default {
	path: '/home-page',
	exact: true,
	public: true,
	component: lazy(() => import('./home-page')),
};
