import React from 'react';
import './MovieCard.css';

const MovieCard = (movie) => {
  return (
    <section className='card'>
      <img className='card-img' src={movie.src} />
      <p>{movie.title}</p>
    </section>
  )
}
export default MovieCard;
