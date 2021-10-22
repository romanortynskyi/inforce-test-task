import * as dotenv from 'dotenv'; 

import express, { Router } from 'express';
import cors from 'cors';

import { initializeFirebase} from './firebase';
import { responseMiddleware } from './middlewares/response.middleware';
import { initApi } from './routes';
import { ApiPath } from './common/enum/api';

dotenv.config({ path: __dirname + '/.env' });

initializeFirebase();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(ApiPath.API, initApi(Router));
app.use(responseMiddleware);

const port = 3050;
app.listen(process.env.PORT || port, () => {
    console.log(`started on port ${port}`);
});
