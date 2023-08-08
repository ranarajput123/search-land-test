import { mainRouter } from './routes';
import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import morgan from 'morgan';
export * from './routes';
export * from './schema';
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 3001;
const isProd = process.env.STAGE === 'prod';

app.use(cors());
if (!isProd) app.use(morgan('dev'));

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: mainRouter,
  })
);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
