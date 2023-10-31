import React from 'react';
import ProductCard from 'Components/ProductCard';
import CartProduct from 'Components/CartProduct';
import Spinner from 'Components/Spinner';
import './index.scss';

const ProductList = ({ products, page }) => {
  return (
    <div className="productList">
      {page === 'home' ? (
        products.length > 0 ? (
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })
        ) : (
          <div className="productList__spinner">
            <Spinner />
          </div>
        )
      ) : page === 'cart' ? (
        products.length > 0 ? (
          products.map((product) => {
            return <CartProduct key={product.id} product={product} />;
          })
        ) : (
          <h2>This user's cart is empty.</h2>
        )
      ) : (
        <div className="productList__spinner">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default ProductList;
