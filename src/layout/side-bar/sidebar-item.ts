import SingIcon from '../../components/icons/sing-icon';
import AlbumIcon from '../../components/icons/album-icon';
import { SideBarDataType } from './../../typings/layout/sidebar';
import SongIcon from '../../components/icons/song-icon';
import PlaylistIcon from '../../components/icons/playlist-icon';
const style = {
	SIDE_ITEM: 'side-bar-item',
	SIDE_SVG: 'side-bar-svg',
};
export const sideBarItem: SideBarDataType = {
	title: {
		innerText: 'React Music',
		linkTo: 'https://flowbite.com/',
		img: {
			src: 'https://flowbite.com/docs/images/logo.svg',
			style: 'mr-3 h-6 sm:h-7',
		},
	},
	items: [
	{
			style: style.SIDE_ITEM,
			linkTo: '/my-music',
			view: {
				component: AlbumIcon({
					className: 'side-bar-svg',
				}),
				value: 'Cá nhân',
			},
		},
	{
			style: style.SIDE_ITEM,
			linkTo: '/home-page',
			view: {
				component: SongIcon({
					className: 'side-bar-svg',
				}),
				value: 'Khám phá',
			},
		},
		{
			style: style.SIDE_ITEM,
			linkTo: '/singers',
			view: {
				component: SingIcon({
					className: 'side-bar-svg',
				}),
				value: 'Singer',
			},
		},
		{
			style: style.SIDE_ITEM,
			linkTo: '/songs',
			view: {
				component: SongIcon({
					className: 'side-bar-svg',
				}),
				value: 'Songs',
			},
		},
		{
			style: style.SIDE_ITEM,
			linkTo: '/play-list',
			view: {
				component: PlaylistIcon({
					className: 'side-bar-svg',
				}),
				value: 'Playlist',
			},
		},
	],
};
