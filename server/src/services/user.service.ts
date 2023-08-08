import { z } from 'zod';
import { AppDataSource } from '../data-source';
import { User } from '../schema/user.schema';
import { trpc } from '../trpc';

export const listUsers = trpc.procedure.query(async () => {
  return AppDataSource.manager.find(User);
});

export const addUser = trpc.procedure
  .input(
    z.object({
      email: z.string(),
      firstName: z.string(),
      lastName: z.string(),
      likesCricket: z.boolean(),
    })
  )
  .mutation(({ input }) => {
    const user = new User();
    user.email = input.email;
    user.firstName = input.firstName;
    user.lastName = input.lastName;
    user.likesCricket = input.likesCricket;
    return AppDataSource.manager.save(user);
  });

export const deleteUser = trpc.procedure
  .input(z.object({ id: z.string() }))
  .mutation(async ({ input }) => {
    const { id } = input;
    return AppDataSource.manager.delete(User, id);
  });
