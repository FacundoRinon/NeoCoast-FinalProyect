import './index.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ name, type, isDisabled, onClick }) => {
  return (
    <>
      <button
        id="button"
        className={cn(`custom-button`, {
          'custom-button--secondary': type === 'secondary',
          'custom-button--disabled': isDisabled === true,
        })}
        onClick={onClick}
        disabled={isDisabled}>
        {name}
      </button>
    </>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
