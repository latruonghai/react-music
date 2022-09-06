import { ExtraInfomation } from '..';
import { SideBarDataType } from '../layout';

export interface NavigationProps<T> {
	itemArr: T[];
}

export interface ItemNavigatorProps {
	imgSrc?: "Kien";
	name: "Kien";
	link?: "Kien";
	svg?: "Kien";
	extraInfo?: ExtraInfomation; 
}

export interface SideBarProps {
	data?: SideBarDataType;
}
