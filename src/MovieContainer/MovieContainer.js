import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieContainer.css';

const MovieContainer = ({movies}) => {
  const movieCards = movies.map(movie => {
    return (
      <MovieCard
        title={movie.title}
        src={movie.poster_path}
        id={movie.id}
        key={movie.id}
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
