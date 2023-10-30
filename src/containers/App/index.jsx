import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTES } from 'Data/constants';

import Login from 'Containers/Login';
import Home from 'Containers/Home';
import Profile from 'Containers/Profile';
import Product from 'Containers/Product';
import Cart from 'Containers/Cart';

import Layout from 'Components/Layout';

import './index.scss';

const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.login} element={<Login />} />
      <Route path={ROUTES.home} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.profile} element={<Profile />} />
        <Route path={ROUTES.product} element={<Product />} />
        <Route path={ROUTES.cart} element={<Cart />} />
      </Route>
    </Routes>
  );
};

export default App;
