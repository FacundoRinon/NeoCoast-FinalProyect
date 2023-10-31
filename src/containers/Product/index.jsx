import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { getSingleProduct } from '../../api/products';
import BackRow from 'Components/BackRow';
import Spinner from 'Components/Spinner';

import './index.scss';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProduct = async () => {
    try {
      const response = await getSingleProduct(id);
      setProduct(response.data);
    } catch (error) {
      console.log('Error in Product/index.jsx - getProduct', error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <BackRow page={'Product'} />
      <div className="product">
        {product !== null ? (
          <div className="product__container">
            <div className="product__img">
              <img src={product.image} alt="" />
            </div>
            <div className="product__details">
              <h3>{product.title}</h3>
              <div className="product__category">
                <p>{product.category}</p>
                <small>
                  <FontAwesomeIcon
                    className="product__score"
                    icon={faStar}
                  />
                  {product.rating.rate} ({product.rating.count}{' '}
                  ratings)
                </small>
              </div>
              <div className="product__description">
                <p>{product.description}</p>
              </div>
              <div className="product__price">
                <p>${product.price}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="product__loader">
            <Spinner />
          </div>
        )}
      </div>
    </>
  );
};

export default Product;
