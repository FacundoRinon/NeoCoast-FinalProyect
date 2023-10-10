import './index.scss';
import PropTypes from 'prop-types';
import React from 'react';

const Filter = ({ onYearChange }) => {
  const startYear = 1950;
  const endYear = 2023;
  const yearOptions = [];

  for (let year = endYear; year >= startYear; year--) {
    yearOptions.push(
      <option key={year} value={year}>
        {year}
      </option>,
    );
  }

  return (
    <>
      <div className="filter">
        <span>Filter by year: </span>
        <select
          name="filter"
          className="filter"
          onChange={onYearChange}>
          <option value="0">Default</option>
          {yearOptions}
        </select>
      </div>
    </>
  );
};

Filter.propTypes = {
  onYearChange: PropTypes.func,
};

export default Filter;
