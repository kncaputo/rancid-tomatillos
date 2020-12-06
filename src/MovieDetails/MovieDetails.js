import React from 'react';
import './MovieDetails.css';

const MovieDetails = ({ movie, error }) => {
  return (
    <section>
      {!error ? 
      <section>
        <img className='card-img' src={movie.backdrop_path} />
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <p>Average User Rating: {movie.average_rating}</p>
        <p>Genre: {movie.genres[0]}</p>
        <p>Release Date: {movie.release_date}</p>
        <p>Budget: ${movie.budget}</p>
        <p>Total Revenue: ${movie.revenue}</p>
        <p>Runtime: {movie.runtime} minutes</p>
      </section> :
      <section>
        <h1>Whoops, it looks like something went wrong!</h1>
      </section>}
    </section>
  )
}

export default MovieDetails;