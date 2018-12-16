import '@babel/polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import Routes from '../src/routes';

const app = express();

app.use(express.static('live'));

app.get('*', (req, res) => {
	const store = createStore();

	const promises = matchRoutes(Routes, req.path).map(({ route }) => {
		return route.loadData ? route.loadData(store) : null;
	});

	Promise.all(promises).then(() => {
		const context = {};
		const content = renderer(req, store, context);

		if (context.url) {
			return res.redirect(301, content.url);
		}

		if (context.notFound) {
			res.status(404);
		}

		res.send(content);
	});
});

app.listen(3005, () => {
	console.log('Listening on port 3005');
});
