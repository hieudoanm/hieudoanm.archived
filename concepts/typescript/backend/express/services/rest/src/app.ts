import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { json, urlencoded } from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import morgan from 'morgan';
import errorHandler from './common/middlewares/error';
import notFoundHandler from './common/middlewares/not-found';
import { RegisterRoutes } from './routes';

const app = express();

app.use(cors());
app.use(json());
app.use(helmet());
app.use(compression());
app.use(cookieParser());
app.use(morgan('combined'));
app.use(urlencoded({ extended: true }));
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false // Disable the `X-RateLimit-*` headers
  })
);

RegisterRoutes(app);

app.use(notFoundHandler({ whitelist: ['/api/graphql'] }));
app.use(errorHandler);

export default app;
