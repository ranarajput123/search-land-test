import { useEffect, useState } from 'react';
import { User } from 'server';

interface LogicProps {
  onClose: () => void;
  onAddUser: (user: User) => Promise<void>;
  open: boolean;
}
export const useAddUser = ({ onAddUser, onClose, open }: LogicProps) => {
  const questions: { key: keyof User; label: string; type: string }[] = [
    { key: 'firstName', label: 'First Name Of User', type: 'string' },
    { key: 'lastName', label: 'Last Name Of User', type: 'string' },
    { key: 'email', label: 'Email Of User', type: 'string' },
    { key: 'likesCricket', label: 'Does The User Like Cricket', type: 'boolean' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [user, setUser] = useState<Partial<User>>({});

  const handleAnswer = (key: string, value: string | boolean) => {
    setUser((prevuser) => ({ ...prevuser, [key]: value }));
  };
  useEffect(() => {
    if (!open) {
      setUser({});
      setCurrentIndex(0);
    }
  }, [open]);
  const handleNextQuestion = () => {
    if (currentIndex <= questions.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };
  const handleSubmit = async () => {
    await onAddUser(user as User);
    onClose();
  };
  const handlePreviousQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };
  return {
    handleAnswer,
    handleNextQuestion,
    handlePreviousQuestion,
    handleSubmit,
    currentIndex,
    user,
    questions,
  };
};
