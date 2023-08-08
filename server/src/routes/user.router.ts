import { trpc } from '../trpc';
import { addUser, deleteUser, listUsers } from '../services/user.service';

export const userRouter = trpc.router({
  list: listUsers,
  add: addUser,
  delete: deleteUser,
});
