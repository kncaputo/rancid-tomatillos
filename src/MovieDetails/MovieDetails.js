import React from 'react';
import './MovieDetails.css';

const MovieDetails = ({ movie }) => {
    return (
        <section>
            <img className='card-img' src={movie.movie.backdrop_path} />
            <h1>{movie.movie.title}</h1>
            <p>{movie.movie.overview}</p>
            <p>Average User Rating: {movie.movie.average_rating}</p>
            {/* <p>Genre: {movie.genres[0].name}</p> */}
            <p>Budget: ${movie.movie.budget}</p>
            <p>Total Revenue: ${movie.movie.revenue}</p>
            <p>Runtime: {movie.movie.runtime}</p>
        </section>
    )
}

export default MovieDetails;