import React, { useEffect } from 'react';

import './index.scss';
import { getAllProducts } from '../../api/products';

const Home = () => {
  const getProducts = async () => {
    try {
      const response = await getAllProducts();
      console.log(response.data);
    } catch (error) {
      console.log('Error in Home/index.jsx - getProducts');
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="home">
      <h1>Welcome to the Home Page of the React Bootcamp App</h1>
    </div>
  );
};

export default Home;
