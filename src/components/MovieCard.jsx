import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
// implement MovieCard component here
const MovieCard = ({ movie }) => (
  <div className="movie-card-body">
    <img src={ movie.imagePath } alt="movie" className="movie-card-image" />
    <h4 className="movie-card-title">{ movie.title }</h4>
    <h5 className="movie-card-subtitle">{ movie.subtitle }</h5>
    <p className="movie-card-storyline">{ movie.storyline }</p>
    <Rating rating={ movie.rating } className="rating" />
  </div>
);

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
