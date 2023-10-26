import React, { useEffect, useState } from 'react';

import { getAllProducts } from '../../api/products';
import ProductList from 'Components/ProductList';

import './index.scss';

const Home = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await getAllProducts();
      setProducts(response.data);
    } catch (error) {
      console.log('Error in Home/index.jsx - getProducts');
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log('products', products);

  return (
    <div className="home">
      <ProductList products={products} />
    </div>
  );
};

export default Home;
