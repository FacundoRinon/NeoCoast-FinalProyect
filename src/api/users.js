import instance from './config';

const getAllUsers = () => {
  return instance.get('users');
};

export { getAllUsers };
