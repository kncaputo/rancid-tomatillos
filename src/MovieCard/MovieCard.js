import React from 'react';
import { Link } from 'react-router-dom'
import './MovieCard.css';

const MovieCard = ({ title, src, alt, rating, id, getSingleMovie }) => {
  return (
    <Link to={`/${id}`} onClick={() => getSingleMovie(id)}>
      <section id={id} className='card'>
        <img className='card-img' src={src} alt={alt} />
        <p>{title}</p>
        <p>Average Rating: {rating.toFixed(2)}</p>
      </section>
    </Link>
  )
}

export default MovieCard;
