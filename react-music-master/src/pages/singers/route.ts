import { lazy } from 'react';

export default {
	path: '/singers',
	exact: true,
	public: true,
	component: lazy(() => import('./singers')),
};
