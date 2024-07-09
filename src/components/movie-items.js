import React from 'react';

const MovieItems = ({ movies }) => {
  return (
    <div className="movie-item">
      <h3>{movies.movie}</h3>
      <p>{movies.rating}</p>
      <img src={movies.imdb_url} alt="Logo" />
    </div>
  );
};

export default MovieItems;
