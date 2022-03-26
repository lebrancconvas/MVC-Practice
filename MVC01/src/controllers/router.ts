import express from 'express';
import BusinessLogic from './logic';

const routes = express();

routes.get('/', (_req: express.Request, res: express.Response) => {
	res.render('./index.ejs');
})

routes.get('/data', (_req: express.Request, res: express.Response) => {
	const logic = new BusinessLogic();
	const data = logic.arrayManagement();
	res.status(200).json(data);
})

export {routes};