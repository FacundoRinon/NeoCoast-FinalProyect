import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTES } from 'Data/constants';

import Home from 'Containers/Home';
import Login from 'Containers/Login';
import Layout from 'Components/Layout';

import './index.scss';

const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.login} element={<Login />} />
      <Route path={ROUTES.home} element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
