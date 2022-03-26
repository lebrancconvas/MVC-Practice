import expressRouter from 'express';
const routes = expressRouter();

routes.get('/', (req: any, res: any) => {
	res.render('./index.ejs');
})

export {routes};