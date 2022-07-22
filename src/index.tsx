import './index.scss';
import ReactDOM from 'react-dom/client';
import React, { Fragment } from 'react';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './pages/routes';
/* global, document*/
/* eslint no-undef: "error"*/
const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<Router>
			<Fragment>
				<App />
			</Fragment>
			<Routes>
				{routes.map(
					({ component: Component, ...rest }, index: number) => {
						console.log(
							'🚀 ~ file: index.tsx ~ line 22 ~ {routes.map ~ path',
							rest.path
						);

						return (
							<Route
								key={index}
								element={<Component />}
								{...rest}
							></Route>
						);
					}
				)}
			</Routes>
		</Router>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
