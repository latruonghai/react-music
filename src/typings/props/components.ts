import { ExtraInfomation } from '..';

export interface NavigationProps<T> {
    itemArr: T[];
}

export interface ItemNavigatorProps {
    imgSrc?: string;
    name: string;
    link?: string;
    svg?: JSX.Element;
    extraInfo?: ExtraInfomation;
}
