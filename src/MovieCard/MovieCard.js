import React from 'react';
import './MovieCard.css';

const MovieCard = ({title, src, alt, id, getSingleMovie}) => {
  return (
    <section id={id} className='card' onClick={() => getSingleMovie(id)}>
      <img className='card-img' src={src} alt={title} />
      <p>{title}</p>
    </section>
  )
}

export default MovieCard;
