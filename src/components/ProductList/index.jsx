import React from 'react';

import ProductCard from 'Components/ProductCard';
import CartProduct from 'Components/CartProduct';

import './index.scss';

const ProductList = ({ products, page }) => {
  return (
    <div className="productList">
      {products ? (
        page === 'home' ? (
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })
        ) : page === 'cart' ? (
          products.map((product) => {
            return <CartProduct key={product.id} product={product} />;
          })
        ) : (
          <p>invalid page</p>
        )
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductList;
