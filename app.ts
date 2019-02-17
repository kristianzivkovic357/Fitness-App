import * as express from 'express';
import { json, urlencoded } from 'body-parser';
import { NextFunction, Request, Response } from 'express';
import { Express } from 'express-serve-static-core';
import { Server } from 'http';
import * as db from './db';
import * as dotenv from 'dotenv';

dotenv.config();

db.default.authenticate().then((msg) => {
    console.log('Successfully connected to database!');
}).catch((err) => {
    console.log(err);
});

import router from './routes';
const { PORT } = process.env;

const app: Express = express();
app.use(json());
app.use(urlencoded({extended: true}));

app.use(router);
app.use('/.well-known', express.static(__dirname + '/.well-known'));


const server: Server = app.listen(PORT, () => {
  console.log('Server listening on http://localhost:' + PORT);
});
export { server };
