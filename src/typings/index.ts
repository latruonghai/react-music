import { LazyExoticComponent } from 'react';

export * from './props';

export type BasicElements = {
	className: string;
};

export interface ExtraInfomation extends BasicElements {
	text: string;
}

export interface RouteType {
	path: string;
	exact?: boolean;
	public?: boolean;
	component: LazyExoticComponent<() => JSX.Element>;
}
