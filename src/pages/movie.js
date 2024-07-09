import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieItem from '../components/movie-items';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get('https://dummyapi.online/api/movies', {
        });
        console.log('Data respon > ', response.data);
        setMovies(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the movie', error);
        setLoading(false);
      }
    };

    fetchMovie();
  }, []);

  if (loading) {
    return <p>Loading Movie...</p>;
  }

  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <MovieItem key={index} movies={movie} />
      ))}
    </div>
  );
};

export default MovieList;
