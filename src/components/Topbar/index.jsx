import React from 'react';
import { useSelector } from 'react-redux';

import Fill from './Fill';

import './index.scss';

const Topbar = () => {
  const user = useSelector((state) => state.user);
  return (
    <>
      <div className="topbar">
        <div className="topbar__header">
          <p className="topbar__img">Img</p>
          <h1 className="topbar__title">NeoStore</h1>
        </div>
        <div className="topbar__actions">
          <p className="topbar__gift">Send Gift</p>
          <p className="topbar__cart">imgCart</p>
          <p className="topbar__user">{user.username}</p>
        </div>
      </div>
      <Fill />
    </>
  );
};

export default Topbar;
