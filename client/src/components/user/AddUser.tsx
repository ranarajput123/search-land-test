import React from 'react';
import {
  Modal,
  Paper,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Box,
  IconButton,
} from '@mui/material';
import ViewUser from './UserDetails';
import { useAddUser } from './useAddUser';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { User } from 'server';

interface Props {
  open: boolean;
  onClose: () => void;
  onAddUser: (user: User) => Promise<void>;
}

const AddUser: React.FC<Props> = ({ open, onClose, onAddUser }) => {
  const {
    currentIndex,
    handleAnswer,
    handleNextQuestion,
    handlePreviousQuestion,
    handleSubmit,
    user,
    questions,
  } = useAddUser({ onAddUser, onClose, open });
  return (
    <Modal open={open} onClose={onClose}>
      <Paper style={{ margin: 'auto', padding: '20px', maxWidth: '80%', marginTop: '10%' }}>
        {currentIndex === questions.length ? (
          <ViewUser user={user as User} onAddUser={handleSubmit} />
        ) : (
          <Box
            minHeight={'15vh'}
            display={'flex'}
            flexDirection="row"
            justifyContent={'space-between'}
          >
            <IconButton
              sx={{ width: '14%', borderLeft: 'inset' }}
              onClick={() => handlePreviousQuestion()}
            >
              <ChevronLeftIcon />
            </IconButton>
            <Box
              display={'flex'}
              flexDirection="column"
              width={'60%'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Typography variant="h6">{questions[currentIndex].label}</Typography>
              {questions[currentIndex].type === 'string' ? (
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  label={questions[currentIndex].label}
                  value={user[questions[currentIndex].key] || ''}
                  onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleNextQuestion();
                    }
                  }}
                  onChange={(e) => handleAnswer(questions[currentIndex].key, e.target.value)}
                />
              ) : (
                <FormControlLabel
                  value={user.likesCricket}
                  control={
                    <Checkbox
                      defaultChecked={user.likesCricket}
                      onChange={(e) => handleAnswer(questions[currentIndex].key, e.target.checked)}
                    />
                  }
                  label={user.likesCricket ? 'Yes' : 'No'}
                  labelPlacement="end"
                />
              )}
            </Box>
            <IconButton
              sx={{ width: '14%', borderRight: 'groove' }}
              onClick={() => handleNextQuestion()}
            >
              <ChevronRightIcon />
            </IconButton>
          </Box>
        )}
      </Paper>
    </Modal>
  );
};

export default AddUser;
