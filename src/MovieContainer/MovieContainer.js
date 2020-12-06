import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieContainer.css';

const MovieContainer = ({ movies, getSingleMovie, error }) => {
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
    <section>
     {!error ? 
      <section className='movie-container'>
        {movieCards}
      </section> :
      <section>
        <h1>Whoops, it looks like something went wrong!</h1>
      </section>}
    </section>
  )
}

export default MovieContainer;
