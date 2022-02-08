import React from 'react';
import MovieCard from './MovieCard';
// implement MovieList component here
const MovieList = ({ movies }) => movies.map(
  (movie) => <MovieCard key={ movie.title } movie={ movie } />,
);

export default MovieList;
