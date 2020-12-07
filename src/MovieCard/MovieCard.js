import React from 'react';
import './MovieCard.css';

const MovieCard = ({title, src, alt, rating, id, getSingleMovie}) => {
  return (
    <section id={id} className='card' onClick={() => getSingleMovie(id)}>
      <img className='card-img' src={src} alt={alt} />
      <p>{title}</p>
      <p>Average Rating: {rating.toFixed(2)}</p>
    </section>
  )
}

export default MovieCard;
