import cors from 'cors';
import express, { Request, Response, json } from 'express';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import { RegisterRoutes } from './routes';

const app = express();
app.use(cors());
app.use(json());
app.use(helmet());

app.use(
  '/swagger',
  swaggerUi.serve,
  async (_request: Request, response: Response) => {
    const swaggerFile = '../docs/swagger/swagger.json';
    const swaggerDoc: swaggerUi.JsonObject = await import(swaggerFile);
    const swaggerHTML = swaggerUi.generateHTML(swaggerDoc);
    return response.send(swaggerHTML);
  }
);

RegisterRoutes(app);

export default app;
