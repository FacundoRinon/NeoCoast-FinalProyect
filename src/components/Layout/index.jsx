import React from 'react';
import { Outlet } from 'react-router-dom';

import Topbar from 'Components/Topbar';

import './index.scss';

const Layout = () => {
  return (
    <div className="layout">
      <Topbar />
      <Outlet />
    </div>
  );
};

export default Layout;
