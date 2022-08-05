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

export interface ImageType extends ComponentType {
	src?: string;
}

export interface ComponentType {
	value?: string;
	style?: string | Object;
}
