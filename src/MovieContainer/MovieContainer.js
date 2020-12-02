import React from 'react';
import './MovieContainer.css';

const MovieContainer = ({movies}) => {
  const movieCards = movies.map(movie => {
    return (
      <section className='card'>
        <img className='card-img' src={movie.poster_path}/>
        <h3>{movie.title}</h3>

      </section>
    )
  })

  return (
    <section className='movie-container'>
      {movieCards}
    </section>
  )
}
export default MovieContainer;
