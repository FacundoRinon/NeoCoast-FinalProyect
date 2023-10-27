import React from 'react';

import ProductCard from 'Components/ProductCard';

import './index.scss';

const ProductList = ({ products }) => {
  return (
    <div className="productList">
      {products ? (
        products.map((product) => {
          return <ProductCard product={product} />;
        })
      ) : (
        <p>NADA</p>
      )}
    </div>
  );
};

export default ProductList;
