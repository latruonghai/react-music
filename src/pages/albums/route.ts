import { lazy } from 'react';

export default {
	path: '/albums',
	exact: true,
	public: true,
	component: lazy(() => import('./albums')),
};
