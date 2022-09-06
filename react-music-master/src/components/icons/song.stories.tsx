import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SongIcon from './song-icon';

export default {
	title: 'Example/Header',
	component: SongIcon,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
} as ComponentMeta<typeof SongIcon>;

const Template: ComponentStory<typeof SongIcon> = args => (
	<SongIcon {...args} />
);

export const Icon = Template.bind({});
Icon.args = {
	width: '30px',
	height: '30px',
};
