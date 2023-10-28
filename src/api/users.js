import instance from './config';

const getAllUsers = () => {
  return instance.get('users');
};

const getOneUser = (id) => {
  return instance.get(`users/${id}`);
};

export { getAllUsers, getOneUser };
