import React from 'react';
import './MovieDetails.css';

const MovieDetails = ({ movie }) => {
  console.log(movie)
  return (
    <section>
      <img className='card-img' src={movie.backdrop_path} />
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>Average User Rating: {movie.average_rating}</p>
      {/* <p>Genre: {movie.genres[0].name}</p> */}
      <p>Budget: ${movie.budget}</p>
      <p>Total Revenue: ${movie.revenue}</p>
      <p>Runtime: {movie.runtime}</p>
    </section>
  )
}

export default MovieDetails;