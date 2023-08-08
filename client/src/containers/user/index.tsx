import { Button, Typography } from '@mui/material';
import React from 'react';
import AddUser from '../../components/user/AddUser';
import UserList from '../../components/user/user-list';
import { useUser } from './useUser';

function UserContainer() {
  const {
    handleFormClose,
    handleUserAddition,
    isFormOpen,
    setIsFormOpen,
    users,
    handleDeleteUser,
  } = useUser();
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        User Management App
      </Typography>
      <UserList users={users} onDeleteUser={handleDeleteUser} />
      <Button
        sx={{ marginTop: '10px' }}
        variant="outlined"
        color="primary"
        onClick={() => setIsFormOpen(true)}
      >
        {'Add User'}
      </Button>
      <AddUser open={isFormOpen} onClose={handleFormClose} onAddUser={handleUserAddition} />
    </div>
  );
}

export default UserContainer;
