import './App.css';

import routes from './pages/routes';
import { Link } from 'react-router-dom';
// console.log(routes);
console.log('🚀 ~ file: App.tsx ~ line 7 ~ routes', routes);
function App() {
	return (
		<div>
			<h1>Home</h1>
			<nav>
				<Link to="/home-page">Home</Link> |{' '}
				<Link to="about">About</Link>
			</nav>
		</div>
	);
}

export default App;
