import React from 'react';
import './MovieDetails.css';

const MovieDetails = ({ movie }) => {
    return (
        <section>
            <img className='card-img' src={movie.movie.backdrop_path} />
            <h1>{movie.movie.title}</h1>
            <p>{movie.movie.overview}</p>
        </section>
    )
}

export default MovieDetails;
