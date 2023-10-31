import React from 'react';
import PropTypes, { object } from 'prop-types';

import CartProduct from 'Components/CartProduct';
import ProductCard from 'Components/ProductCard';
import Spinner from 'Components/Spinner';

import './index.scss';

const ProductList = ({ products, page }) => {
  return (
    <div className="productList">
      {page === 'home' ? (
        products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })
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

ProductList.propTypes = {
  products: PropTypes.arrayOf(object),
  page: PropTypes.string.isRequired,
};

export default ProductList;
