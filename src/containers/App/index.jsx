import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTES } from 'Data/constants';

import Login from 'Containers/Login';
import Home from 'Containers/Home';

import Layout from 'Components/Layout';
import Product from 'Containers/Product';

import './index.scss';

const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.login} element={<Login />} />
      <Route path={ROUTES.home} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.product} element={<Product />} />
      </Route>
    </Routes>
  );
};

export default App;
