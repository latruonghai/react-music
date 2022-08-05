import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Sidebar from '.';
import { sideBarItem } from './sidebar-item';
import { BrowserRouter } from 'react-router-dom';
import '../../index.scss';
export default {
	title: 'Example/Sidebar',
	component: Sidebar,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = args => (
	<BrowserRouter>
		<Sidebar {...args} />
	</BrowserRouter>
);

export const Side = Template.bind({});
Side.args = {
	data: sideBarItem,
};
Side.parameters = {
	backgrounds: {
		values: [
			{ name: 'red', value: '#f00' },
			{ name: 'green', value: '#0f0' },
			{ name: 'blue', value: '#00f' },
		],
	},
};
