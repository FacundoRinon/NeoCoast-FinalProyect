import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import { getAllProducts } from '../../api/products';
import { getOneUser, getUserCart } from '../../api/users';
import ProductList from 'Components/ProductList';
import BackRow from 'Components/BackRow';
import Spinner from 'Components/Spinner';

import './index.scss';

const Cart = () => {
  const { id } = useParams();
  const [cartUser, setCartUser] = useState();

  const getCartData = async () => {
    try {
      const userResponse = await getOneUser(id);
      const cartResponse = await getUserCart(id);
      const productsResponse = await getAllProducts();

      if (cartResponse.data) {
        const cartProducts = cartResponse.data.products.map(
          (cartItem) => {
            const productDetails = productsResponse.data.find(
              (product) => product.id === cartItem.productId,
            );
            return {
              ...productDetails,
              quantity: cartItem.quantity,
            };
          },
        );

        const user = userResponse.data;
        const updatedUser = {
          ...user,
          cart: cartProducts,
        };
        setCartUser(updatedUser);
      } else {
        const user = userResponse.data;
        const updatedUser = {
          ...user,
          cart: [],
        };
        setCartUser(updatedUser);
      }
    } catch (error) {
      console.log('Error in Cart/index.jsx - getCartData', error);
    }
  };

  useEffect(() => {
    getCartData();
  }, []);

  return (
    <>
      <BackRow page={'Cart'} />
      <div className="cart">
        {cartUser && (
          <div className="cart__header">
            <div className="cart__img">
              <img
                src={`https://robohash.org/${cartUser.username}`}
                alt=""
              />
            </div>
            <div className="cart__user">
              <h2>
                <Link
                  className="link--primary"
                  to={`/profile/${cartUser.id}`}>
                  {cartUser.name.firstname} {cartUser.name.lastname}
                </Link>
              </h2>
              <p>{cartUser.username}</p>
              <p>{cartUser.email}</p>
            </div>
          </div>
        )}
        {cartUser ? (
          <>
            <ProductList products={cartUser.cart} page={'cart'} />
            {cartUser.cart.length > 0 && (
              <div className="cart__buy">
                <b>
                  Cart Total: $
                  {cartUser.cart.reduce((total, item) => {
                    return total + item.price * item.quantity;
                  }, 0)}
                </b>
                <button>Buy Cart</button>
              </div>
            )}
          </>
        ) : (
          <div className="cart__spinner">
            <Spinner />
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
