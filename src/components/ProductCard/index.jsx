import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

const ProductCard = ({ product }) => {
  console.log(product);

  return (
    <div className="productCard">
      <Link className="link" to={`/product/${product.id}`}>
        <div className="productCard__imgContainer">
          <img src={product.image} alt="" />
        </div>
        <div className="productCard__title">{product.title}</div>
        <div className="productCard__price">${product.price}</div>
      </Link>
    </div>
  );
};

export default ProductCard;
