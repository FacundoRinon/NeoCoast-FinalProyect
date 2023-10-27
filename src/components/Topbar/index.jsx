import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartPlus,
  faUser,
  faArrowRightFromBracket,
  faGift,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';

import { removeUser } from '../../redux/userSlice';

import './index.scss';

const Topbar = () => {
  const user = useSelector((state) => state.user);

  const [drop, setDrop] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(removeUser());
    navigate('/login');
  };

  const toggleDrop = () => {
    if (drop === false) {
      setDrop(true);
    } else {
      setDrop(false);
    }
  };

  return (
    <>
      <div className="topbar">
        <div className="topbar__header">
          <img
            className="topbar__img"
            src="https://media.licdn.com/dms/image/D4D0BAQG8fQlyC7YOxA/company-logo_200_200/0/1688400672391/neocoast_logo?e=2147483647&v=beta&t=4I_aV2DApODpx1mHAWrbgpeD81eW799vkCfy9UTtWDM"
            alt=""
          />
          <h1 className="topbar__title">NeoStore</h1>
        </div>
        <div className="topbar__actions">
          <FontAwesomeIcon
            className="topbar__cart"
            icon={faCartPlus}
          />
          <p onClick={() => toggleDrop()} className="topbar__user">
            {user.username}
            <FontAwesomeIcon
              className="drop__icon"
              icon={faChevronDown}
            />
          </p>
        </div>
      </div>
      {drop && (
        <div className="drop">
          <div className="drop__actions">
            <p className="drop__action">
              Gifts
              <FontAwesomeIcon className="drop__icon" icon={faGift} />
            </p>
            <p className="drop__action">
              Profile
              <FontAwesomeIcon className="drop__icon" icon={faUser} />
            </p>
            <p
              className="drop__action"
              onClick={() => handleLogOut()}>
              Log out
              <FontAwesomeIcon
                className="drop__icon"
                icon={faArrowRightFromBracket}
              />
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Topbar;