import React from 'react';
import './MovieCard.css';

const MovieCard = ({movie, getSingleMovie}) => {
  return (
    <section id={movie.id} className='card' onClick={() => getSingleMovie(movie.id)}>
      <img className='card-img' src={movie.src} />
      <p>{movie.title}</p>
    </section>
  )
}
export default MovieCard;
