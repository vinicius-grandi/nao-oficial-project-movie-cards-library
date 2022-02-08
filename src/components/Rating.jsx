import React from 'react';
import PropTypes from 'prop-types';
// implement Rating component here
const Rating = ({ rating }) => <p className="rating">{rating}</p>;

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
