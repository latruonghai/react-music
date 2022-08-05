import './index.scss';
import ReactDOM from 'react-dom/client';
import React, { Fragment, Suspense } from 'react';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './pages/routes';
/* global, document*/
/* eslint no-undef: "error"*/
const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

// console.log(routes)
root.render(
	<React.StrictMode>
		<Suspense>
			<Router>
				<Fragment>
					<App />
				</Fragment>
				<Fragment>
					<div className="main-view">
						<Routes>
							{routes.map(
								({ component: Component, ...rest }, index: number) => {
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
					</div>
				</Fragment>
			</Router>
		</Suspense>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
