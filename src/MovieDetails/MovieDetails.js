import React from 'react';
import './MovieDetails.css';

const MovieDetails = ({ movie, statusCode, error }) => {

	const formatNum = (num, type) => {
		return (
			num > 0 && <p><b>{ type }:</b> ${new Intl.NumberFormat('en-US').format(num)}</p>
		)
	}

  return (
    <section>
      {statusCode < 400 ? 
				<section className='movie-details-box'>
					<img className='card-img' src={movie.backdrop_path} />
					<h1><b>{movie.title}</b></h1>

					<div className='overview'><p><b>Overview:</b><br/>{movie.overview}</p>
					<p><b>Average User Rating:</b> {movie.average_rating.toFixed(2)}</p></div>
					<p><b>Genre:</b> {movie.genres[0]}</p>
					<p><b>Release Date:</b> {movie.release_date}</p>
					{ formatNum(movie.budget, 'Budget') }
					{ formatNum(movie.revenue, 'Total Revenue') }
					<p><b>Runtime:</b> {movie.runtime} minutes</p>
				</section> :
				<section>
					<h1>Whoops, it looks like something went wrong!</h1>
					<p>{statusCode} {error}</p>
				</section>
			}
    </section>
  )
}

export default MovieDetails;