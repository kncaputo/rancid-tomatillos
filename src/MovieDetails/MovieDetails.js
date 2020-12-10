import React from 'react';
import ReactPlayer from 'react-player';
import './MovieDetails.css';

const MovieDetails = ({ movie, statusCode, error, movieTrailer }) => {

	const formatNum = (num, type) => {
		return (
      num > 0 && 
      <section className='details-box'>
        <p className='l-details'><b> {type} :</b></p>
        <p className='r-details'>${new Intl.NumberFormat('en-US').format(num)}</p>
      </section>
		)
  }

  const formatGenres = (movie) => {
    if (!movie.genres) {
      return "Unavailable"
    } else if (movie.genres.length > 1) {
      let commaList = movie.genres.reduce((genres, genre) => {
        genres += ' | ' + genre
        return genres
      }, '')
      return commaList.slice(3, commaList.length);
    } else {
      return movie.genres[0];
    }
  }

  return (
    <section>
      {statusCode < 400 ? 
				<section className='movie-details-box'>
          {/* <ReactPlayer url={`https://www.youtube.com/watch?v=${movieTrailer.key}`} /> */}
					<img className='card-img backdrop' src={movie.backdrop_path} />
          <section className='up-first'>
            <img className='card-img poster' src={movie.poster_path} />
            <section className='poster-aside'>
              <h1 className='movie-title'><b>{movie.title}</b></h1>
              <section className='ratings-box'>
                <p className='l-details'><b>Average User Rating:</b></p>
                <p className='r-details'>{movie.average_rating.toFixed(2)}</p>
              </section>
            </section>
          </section>

					<section className='overview-box'>
            <p className='overview-title'><b>Movie Info:</b></p>
            <p className='overview-text'>{movie.overview}</p>
          </section>
					<section className='details-box'>
            <p className='l-details'><b>Genre:</b></p>
            <p className='r-details'>{ formatGenres(movie) }</p>
          </section>
          <section className='details-box'>
            <p className='l-details'><b>Release Date: </b></p>
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