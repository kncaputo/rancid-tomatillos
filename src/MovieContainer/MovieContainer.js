import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieContainer.css';

const MovieContainer = ({movies, getSingleMovie}) => {
  const movieCards = movies.map(movie => {
    return (
      <MovieCard
        title={movie.title}
        src={movie.poster_path}
        alt={movie.title}
        id={movie.id}
        key={movie.id}
        getSingleMovie={getSingleMovie}
      />
    )
  })

  return (
    <section className='movie-container'>
      {movieCards}
    </section>
  )
}

export default MovieContainer;
