import './App.css';

import routes from './pages/routes';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import Sidebar from './layout/side-bar/index';
import { sideBarItem } from './layout/side-bar/sidebar-item';
// import sideBarItem
// import Sidebar
// console.log(routes);
console.log('🚀 ~ file: App.tsx ~ line 7 ~ routes', routes);
console.log(typeof import('./components/icons/album-icon'));
function App() {
	return (
		<Fragment>
			<Sidebar data={sideBarItem}></Sidebar>
		</Fragment>
	);
}

export default App;
