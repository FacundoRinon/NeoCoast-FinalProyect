import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getSingleProduct } from '../../api/products';
import BackRow from 'Components/BackRow';
import Spinner from 'Components/Spinner';

import './index.scss';

const Product = () => {
  const user = useSelector((state) => state.user);
  const carts = useSelector((state) => state.carts);
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getProduct = async () => {
    try {
      const response = await getSingleProduct(id);
      setProduct(response.data);
    } catch (error) {
      console.log('Error in Product/index.jsx - getProduct', error);
    }
  };

  const cartAdder = () => {
    try {
      const userCart = carts.find((cart) => cart.id === user.id);
      if (userCart) {
        dispatch(
          addToCart({
            id,
            userId: user.id,
          }),
        );
        toast.success(`${product.title} added to your cart!`, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
        // navigate(`/cart/${user.id}`);
      } else {
        console.log('There is no cart');
      }
    } catch (error) {
      console.log('Error in Product/index.jsx - cartAdder');
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
              <div className="product__adder">
                <button onClick={() => cartAdder()}>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="product__loader">
            <Spinner />
          </div>
        )}
        <ToastContainer />
      </div>
    </>
  );
};

export default Product;
