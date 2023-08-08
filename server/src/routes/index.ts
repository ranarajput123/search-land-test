import { trpc } from '../trpc';
import { userRouter } from './user.router';

export const mainRouter = trpc.router({
  user: userRouter,
});
export type MainRouter = typeof mainRouter;
