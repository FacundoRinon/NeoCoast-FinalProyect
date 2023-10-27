import React, { useEffect, useState } from 'react';

import ProductList from 'Components/ProductList';
import { getAllProducts, getAllCategories } from '../../api/products';

import './index.scss';

const Filter = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const getProducts = async () => {
    try {
      const response = await getAllProducts();
      setProducts(response.data);
    } catch (error) {
      console.log('Error in Home/index.jsx - getProducts');
    }
  };

  const getCategories = async () => {
    try {
      const categoriesResponse = await getAllCategories();
      setCategories(categoriesResponse.data);
    } catch (error) {
      console.log('Error in Home/index.jsx - getCategories');
    }
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const filteredProducts = !selectedCategory.category
    ? products
    : products.filter(
        (product) => product.category === selectedCategory.category,
      );

  return (
    <div className="filter">
      <div className="filter__filter">
        {categories.length > 0 && (
          <p
            className="filter__category"
            onClick={() => setSelectedCategory('')}>
            all
          </p>
        )}
        {categories &&
          categories.map((category) => {
            return (
              <p
                key={category}
                className="filter__category"
                onClick={() => setSelectedCategory({ category })}>
                {category}
              </p>
            );
          })}
      </div>
      <div className="filter__list">
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
};

export default Filter;
