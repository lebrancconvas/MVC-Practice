import express from 'express';

const routes = express();

routes.get('/', (_req: express.Request, res: express.Response) => {
	res.render('./index.ejs');
})

export {routes};