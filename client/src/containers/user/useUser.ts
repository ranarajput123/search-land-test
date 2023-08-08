import { useState } from 'react';
import { User } from 'server';
import { trpc } from '../../trpc';

export const useUser = () => {
  const users = trpc.user.list.useQuery().data || [];
  const addUserMutation = trpc.user.add.useMutation();
  const trpcContext = trpc.useContext();
  const deleteUserMutation = trpc.user.delete.useMutation();

  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleFormClose = () => {
    setIsFormOpen(false);
  };
  const handleDeleteUser = async (id: string) => {
    await deleteUserMutation.mutateAsync({ id });
    await trpcContext.user.list.invalidate();
  };
  const handleUserAddition = async (user: User) => {
    setIsFormOpen(false);
    await addUserMutation.mutateAsync(user);
    await trpcContext.user.list.invalidate();
  };
  return {
    users,
    isFormOpen,
    setIsFormOpen,
    handleFormClose,
    handleUserAddition,
    handleDeleteUser,
  };
};
