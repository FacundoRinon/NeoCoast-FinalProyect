import instance from './config';

const getAllProducts = () => {
  return instance.get('products');
};

export { getAllProducts };
