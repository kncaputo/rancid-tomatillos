import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import ErrorContainer from '../ErrorBoundary/ErrorBoundary';
import './MovieContainer.css';

const MovieContainer = ({ movies, getSingleMovie, error }) => {

  // clearSingleMovie = () => {

  // }

  const movieCards = movies.map(movie => {
    return (
      <MovieCard
        title={movie.title}
        src={movie.poster_path}
        alt={movie.title}
        rating={movie.average_rating}
        id={movie.id}
        key={movie.id}
        getSingleMovie={getSingleMovie}
      />
    );
  })

  return (
    <section>
      <section className='movie-container'>
        {movieCards}
      </section>
    </section>
  );
}

export default MovieContainer;
