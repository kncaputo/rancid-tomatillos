import React from 'react';
import './MovieCard.css';

const MovieCard = ({title, src, id, getSingleMovie}) => {
  return (
    <section id={id} className='card' onClick={() => getSingleMovie(id)}>
      <img className='card-img' src={src} />
      <p>{title}</p>
    </section>
  )
}

export default MovieCard;
