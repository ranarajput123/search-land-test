export const useUserList = () => {
  const columns = [
    { label: 'First Name', key: 'firstName' },
    { label: 'Last Name', key: 'lastName' },
    { label: 'Email', key: 'email' },
    { label: 'Likes Cricket', key: 'likesCricket' },
    { label: 'Actions', key: 'actions' },
  ];
  return { columns };
};
