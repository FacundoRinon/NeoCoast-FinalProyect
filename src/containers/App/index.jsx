import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTES } from 'Data/constants';

import Home from 'Containers/Home';
import Login from 'Containers/Login';

import './index.scss';

const App = () => {
  return (
    <Routes>
      <Route>
        <Route index element={<Home />} />
        <Route path={ROUTES.login} element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;
