import { RouteType } from './../typings/index';
let routes: RouteType[] = [];
const context = require.context('./', true, /route.ts$/);

context.keys().forEach(path => {
	routes.push(require(`${path}`).default);
});

export default routes;
