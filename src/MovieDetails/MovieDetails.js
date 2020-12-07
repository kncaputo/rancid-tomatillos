import React from 'react';
import './MovieDetails.css';

const MovieDetails = ({ movie, statusCode, error }) => {

	const formatNum = (num, type) => {
		return (
      num > 0 && 
      <section className='details-box'>
        <p className='l-details'><b> {type} :</b></p>
        <p className='r-details'>${new Intl.NumberFormat('en-US').format(num)}</p>
      </section>
		)
	}

  return (
    <section>
      {statusCode < 400 ? 
				<section className='movie-details-box'>
					<img className='card-img' src={movie.backdrop_path} />
					<h1 className='movie-title'><b>{movie.title}</b></h1>
          <section className='details-box'>
              <p className='l-details'><b>Average User Rating:</b></p>
              <p className='r-details'>{movie.average_rating.toFixed(2)}</p>
          </section>
					<section className='overview-box'>
            <p className='overview-title'><b>Overview:</b></p>
            <p className='overview-text'>{movie.overview}</p>
          </section>
          <section className='details-box'>
            <p className='l-details'><b>Genre:</b></p>
            <p className='r-details'>{movie.genres[0]}</p>
          </section>
          <section className='details-box'>
            <p className='l-details'><b>Release Date:</b></p>
            <p className='r-details'>{movie.release_date}</p>
          </section>
          { formatNum(movie.budget, 'Budget') }
					{ formatNum(movie.revenue, 'Total Revenue') }
          <section className='details-box'>
            <p className='l-details'><b>Runtime:</b></p>
            <p className='r-details'>{movie.runtime} minutes</p>
          </section>
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