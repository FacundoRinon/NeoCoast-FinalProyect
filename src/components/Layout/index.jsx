import './index.scss';
import TopBar from 'Components/TopBar';
import React, { Children, useState } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = (
  {
    /*children, topBarLogo, topBarRoutes */
  },
) => {
  const topBarLogo = 'NeoMovies';
  const topBarRoutes = [
    { route: '/all-movies', label: 'All movies' },
    { route: '/favorites', label: 'Favorites' },
  ];

  return (
    <>
      <TopBar topBarLogo={topBarLogo} topBarRoutes={topBarRoutes} />
      <Outlet />
      {/* {children} */}
    </>
  );
};

export default Layout;
