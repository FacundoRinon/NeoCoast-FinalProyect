import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getAllProducts } from '../../api/products';
import { getOneUser } from '../../api/users';
import { buyCart } from '../../redux/cartsSlice';
import ProductList from 'Components/ProductList';
import BackRow from 'Components/BackRow';
import Spinner from 'Components/Spinner';
import { ROUTES } from '../../data/constants';

import './index.scss';

const Cart = () => {
  const carts = useSelector((state) => state.carts);
  const { id } = useParams();
  const [cartUser, setCartUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [userCart, setUserCart] = useState([]);
  const [cartPage, setCartPage] = useState(0);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getCartData = async () => {
    try {
      const userResponse = await getOneUser(id);
      const productsResponse = await getAllProducts();
      const userCart = carts.filter(
        (item) => item.userId === parseInt(id),
      );

      if (userCart && userCart.length > 0) {
        const cartProducts = userCart[cartPage].products.map(
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
        setUserCart(userCart);
        setCartUser(userResponse.data);
        setCartItems(cartProducts);
      } else {
        if (userResponse.data) {
          setCartItems([]);
          setCartUser(userResponse.data);
        } else {
          navigate(`/${ROUTES.error}`);
        }
      }
    } catch (error) {
      console.log('Error in Cart/index.jsx - getCartData', error);
    }
  };

  const buyCartItems = () => {
    try {
      dispatch(
        buyCart({ userId: id, cartId: userCart[cartPage].id }),
      );
      toast.success(
        `You just buy ${cartUser.name.firstname} ${cartUser.name.lastname} cart!`,
        {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        },
      );
      if (userCart.length > 0) {
        changeCart();
      }
    } catch (error) {
      console.log('Error in Cart/index.jsx - buyCartItems');
    }
  };

  const changeCart = () => {
    try {
      if (userCart.length <= cartPage + 1) {
        setCartPage(0);
      } else {
        setCartPage(cartPage + 1);
      }
    } catch (error) {
      console.log('Error in Cart/index.jsx - changeCart', error);
    }
  };

  useEffect(() => {
    getCartData();
  }, [carts, cartPage]);

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
            <ProductList products={cartItems} page={'cart'} />
            {cartItems.length > 0 && (
              <div className="cart__buy">
                <b>
                  Cart Total: $
                  {cartItems.reduce((total, item) => {
                    return total + item.price * item.quantity;
                  }, 0)}
                </b>
                <button onClick={() => buyCartItems()}>
                  Buy Cart
                </button>
                <button onClick={() => changeCart()}>
                  Change cart
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="cart__spinner">
            <Spinner />
          </div>
        )}
        <ToastContainer />
      </div>
    </>
  );
};

export default Cart;
