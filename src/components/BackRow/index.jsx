import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import './index.scss';

const BackRow = ({ route }) => {
  return (
    <Link className="backRow link--primary" to={route}>
      <FontAwesomeIcon className="backRow__icon" icon={faArrowLeft} />
    </Link>
  );
};

export default BackRow;
