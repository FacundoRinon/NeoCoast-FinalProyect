import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getAllUsers, getUsersCarts } from '../../api/users';
import { setUser } from '../../redux/userSlice';

import './index.scss';

const Login = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [users, setUsers] = useState([]);
  const [carts, setCarts] = useState([]);
  const [credentials, setCredentials] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function getUsers() {
    try {
      const response = await getAllUsers();
      console.log('response.data: ', response.data);
      setUsers(response.data);
    } catch (error) {
      console.log('Error in Login/index.jsx - getUsers: ', error);
    }
  }

  async function getCarts() {
    try {
      const response = await getUsersCarts();
      console.log(response.data);
      setCarts(response.data);
    } catch (error) {
      console.log('Error in Login/index.jsx - getCarts', error);
    }
  }

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      const filteredUsers = users.filter(
        (person) =>
          person.email === emailValue ||
          person.username === emailValue,
      );
      let cart = [];
      if (filteredUsers.length === 0) {
        setCredentials('No user');
        setEmailValue('');
        setPasswordValue('');
      } else {
        const user = filteredUsers[0];
        const filteredCart = carts.filter((c) => c.id === user.id);

        if (filteredCart.length !== 0) {
          cart = filteredCart[0];
        }
        if (user.password !== passwordValue) {
          setCredentials('Wrong password');
          setPasswordValue('');
        } else {
          dispatch(setUser({ user: user, cart: cart }));
          navigate('/');
        }
      }
    } catch (error) {
      console.log('Error in Login/index.jsx - handleSubmit: ', error);
    }
  }

  useEffect(() => {
    getUsers();
    getCarts();
  }, []);

  return (
    <>
      <div className="login">
        <form
          className="login__form"
          action=""
          onSubmit={handleSubmit}>
          <h1 className="login__header">Login</h1>
          <input
            className="login__input"
            type="text"
            placeholder={
              credentials === 'No user'
                ? 'Wrong user'
                : 'example@mail.com'
            }
            value={emailValue}
            onChange={(event) => setEmailValue(event.target.value)}
          />
          <input
            className="login__input"
            type="password"
            placeholder={
              credentials === 'Wrong password'
                ? 'Wrong password'
                : 'password'
            }
            value={passwordValue}
            onChange={(event) => setPasswordValue(event.target.value)}
          />
          <button className="login__button">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
