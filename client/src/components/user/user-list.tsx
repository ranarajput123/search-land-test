import React from 'react';
import Table from '../common/Table';
import { useUserList } from './useUserList';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IconButton } from '@mui/material';
import { User } from 'server';

interface Props {
  users: User[];
  onDeleteUser: (id: string) => Promise<void>;
}

const UserList: React.FC<Props> = ({ users, onDeleteUser }) => {
  const { columns } = useUserList();
  const deleteIcon = (id: string) => (
    <IconButton color="warning" onClick={() => onDeleteUser(id)}>
      <DeleteOutlineIcon />
    </IconButton>
  );
  return (
    <Table
      columns={columns}
      data={users.map((u) => ({
        ...u,
        likesCricket: u.likesCricket ? 'Yes' : 'No',
        actions: [deleteIcon(u.id!)],
      }))}
    />
  );
};

export default UserList;
