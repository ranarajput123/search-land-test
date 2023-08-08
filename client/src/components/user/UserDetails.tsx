import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { User } from 'server';

interface Props {
  user: User;
  onAddUser: () => Promise<void>;
}

export default function ViewUser({ user, onAddUser }: Props) {
  return (
    <Box textAlign={'center'}>
      <Typography variant="h5" marginBottom={'10px'}>
        The user to be created
      </Typography>
      <Box display={'flex'} flexDirection={'column'} justifyContent={'space-around'} gap={'10px'}>
        <Box display={'grid'} gridTemplateColumns={'50% 50%'} justifyItems={'center'}>
          <Typography variant="subtitle1">First Name</Typography>
          <Typography variant="subtitle1">Last Name</Typography>
          <Typography variant="overline">{user.firstName}</Typography>
          <Typography variant="overline">{user.lastName}</Typography>
          <Typography variant="subtitle1">Email</Typography>
          <Typography variant="subtitle1">Likes Cricket</Typography>
          <Typography variant="overline">{user.email}</Typography>
          <Typography variant="overline">{user.likesCricket === true ? 'Yes' : 'No'}</Typography>
        </Box>
      </Box>
      <Button
        variant="outlined"
        color="success"
        onClick={() => {
          onAddUser();
        }}
      >
        Confirm
      </Button>
    </Box>
  );
}
