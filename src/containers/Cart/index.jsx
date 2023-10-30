import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { getAllProducts } from '../../api/products';
import { getOneUser, getUserCart } from '../../api/users';
import ProductList from 'Components/ProductList';
import BackRow from 'Components/BackRow';

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

  console.log(cartUser);
  return (
    <div className="cart">
      <BackRow route={'/'} />
      {cartUser && (
        <div className="cart__header">
          <div className="cart__img">
            <img
              src="https://media.licdn.com/dms/image/D4D03AQHRpriPsqXNyw/profile-displayphoto-shrink_800_800/0/1674105280991?e=2147483647&v=beta&t=1HHq56exp6ajnbwS8rIVQBcxz-kie53VfW5WpfZcOW0"
              alt=""
            />
          </div>
          <div className="cart__user">
            <h2>
              {cartUser.name.firstname} {cartUser.name.lastname}{' '}
              (cart)
            </h2>
            <p>{cartUser.username}</p>
            <p>{cartUser.email}</p>
          </div>
        </div>
      )}
      {cartUser ? (
        <>
          <ProductList products={cartUser.cart} page={'cart'} />
          <div className="cart__buy">
            <b>
              Cart Total:{' '}
              {cartUser.cart.reduce((total, item) => {
                return total + item.price * item.quantity;
              }, 0)}
            </b>
            <button>Buy Cart</button>
          </div>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default Cart;
