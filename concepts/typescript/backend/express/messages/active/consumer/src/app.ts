import cors from 'cors';
import express, { json } from 'express';
import helmet from 'helmet';
import { RegisterRoutes } from './routes';

const app = express();

app.use(cors());
app.use(json());
app.use(helmet());

RegisterRoutes(app);

export default app;
