import instance from './config';

const getAllProducts = () => {
  return instance.get('products');
};

const getAllCategories = () => {
  return instance.get('products/categories');
};

export { getAllProducts, getAllCategories };
