import { ImageType, ComponentType } from './../index';
export interface SideBarItem {
	style: string | Object;
	linkTo?: string;
	view?: ViewType;
}
export type Component = () => Promise<Object>;

export interface SideBarTitle {
	linkTo?: string;
	innerText: string | ComponentType;
	img?: ImageType;
}
export interface ViewType extends ComponentType {
	component?: JSX.Element;
}

export interface SideBarDataType {
	title: SideBarTitle;
	items: SideBarItem[];
}
