import React from 'react';
import './index.scss';

const ProductList = ({ products }) => {
  return (
    <div className="productList">
      <h1>Welcome to the Home Page of the React Bootcamp App </h1>
      {products.map((product) => {
        return <p key={product.id}>{product.title}</p>;
      })}
    </div>
  );
};

export default ProductList;
