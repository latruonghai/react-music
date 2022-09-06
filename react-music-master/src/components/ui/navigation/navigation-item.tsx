import * as React from 'react';
import { ItemNavigatorProps } from '../../../typings/props/components';

export const NavigationItem = (props: ItemNavigatorProps) => {
    return (
        <React.Fragment>
            <li>
                <a
                    href={props.link}
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                    {props.svg && props.svg}
                    {props.name && (
                        <span className="flex-1 ml-3 whitespace-nowrap">
                            {props.name}
                        </span>
                    )}
                    {props.extraInfo && (
                        <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                            {props.extraInfo.text}
                        </span>
                    )}
                </a>
            </li>
        </React.Fragment>
    );
};
export default NavigationItem;