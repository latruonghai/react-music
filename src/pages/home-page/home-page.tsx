import * as React from 'react';
import { useEffect } from 'react';

const HomePage = (props: any) => {
	useEffect(() => {
		console.log('This is mounted');
	});
	return (
		<React.Fragment>
			<div className="text-red-200">Hello</div>
		</React.Fragment>
	);
};
export default HomePage;
