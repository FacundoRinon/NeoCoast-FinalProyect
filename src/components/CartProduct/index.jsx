import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import './index.scss';

const CartProduct = ({ product }) => {
  const productTotal = product.price * product.quantity;

  return (
    <Link
      className="cartProduct link--primary"
      to={`/product/${product.id}`}>
      <div className="cartProduct__img">
        <img src={product.image} alt="" />
      </div>
      <div className="cartProduct__info">
        <h2>{product.title}</h2>
        <small>
          Rate: {product.rating.rate}{' '}
          <FontAwesomeIcon icon={faStar} />
        </small>
        <div className="cartProduct__cost">
          <p>
            <b>Cost: </b>${product.price}
          </p>
          <p>
            <b>Units: </b>
            {product.quantity}
          </p>
          <p>
            <b>Total: </b>${productTotal}
          </p>
        </div>
      </div>
    </Link>
  );
};

CartProduct.propTypes = {
  product: PropTypes.object.isRequired,
};

export default CartProduct;
