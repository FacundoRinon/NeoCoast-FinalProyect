import './index.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = ({ topBarLogo, topBarRoutes }) => {
  return (
    <>
      <div className="topbar">
        <div className="topbar__icon">
          <Link className="topbar__name" to={'/'}>
            {topBarLogo}
          </Link>
        </div>
        <div className="topbar__buttons">
          <button className="topbar__button">
            {topBarRoutes[0].label}
          </button>
          <button className="topbar__button">
            {topBarRoutes[1].label}
          </button>
        </div>
      </div>
    </>
  );
};

export default TopBar;
