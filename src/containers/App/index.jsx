import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Cart from 'Containers/Cart';
import Gift from 'Containers/Gift';
import Home from 'Containers/Home';
import Layout from 'Components/Layout';
import Login from 'Containers/Login';
import Product from 'Containers/Product';
import Profile from 'Containers/Profile';
import { ROUTES } from 'Data/constants';

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
        <Route path={ROUTES.gift} element={<Gift />} />
      </Route>
    </Routes>
  );
};

export default App;
