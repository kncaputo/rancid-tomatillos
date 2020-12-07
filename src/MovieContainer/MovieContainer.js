import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieContainer.css';

const MovieContainer = ({ movies, getSingleMovie, statusCode, error }) => {
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
    )
  })

  return (
    <section>
    {statusCode < 400 ?  
      <section className='movie-container'>
        {movieCards}
      </section> :
      <section>
        <h1>Whoops, it looks like something went wrong!</h1>
        <p>{statusCode} {error}</p>
      </section>}
    </section>
  )
}

export default MovieContainer;
