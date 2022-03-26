import express from 'express';
import bodyParser from 'body-parser';
import {routes} from './controllers/router';

const app = express();


const PORT = 3005;

app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({ extended: true })
)

app.use('/', routes);

app.listen(PORT, () => {
	console.info(`Server Listening at PORT: ${PORT}.`);
})





