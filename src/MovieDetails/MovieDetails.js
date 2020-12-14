import React from 'react';
import ReactPlayer from 'react-player';
import ListItem from '../ListItem/ListItem';
import './MovieDetails.css';

const MovieDetails = ({ movie, movieTrailers }) => {

	const formatNum = (num, type) => {
		return (
      num > 0 && 
      <ListItem label={type} body={`$${new Intl.NumberFormat('en-US').format(num)}`} />
		);
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

  const determineApproval = (rating) => {
    if (rating < 4) {
      return '🤢'
    } else if (rating < 6) {
      return '👌'
    } else if (rating < 9) {
      return '👍'
    } else {
      return '🤩'
    }
  }

  return (
    <section>
      <section className='banner-container'>
        <img className='card-img banner-img' src={movie.backdrop_path} alt={`${movie.title} banner`} />
      </section>
      <section className='container'>
        <section className='side-panel'>
        </section>

          <section className='center-panel'>

            <section className='movie-details-box'>
              {/* <ReactPlayer url={`https://www.youtube.com/watch?v=${movieTrailers.key}`} /> */}
              {/* <img className='card-img backdrop' src={movie.backdrop_path} /> */}
              <section className='up-first'>
                <img className='card-img poster' src={movie.poster_path} alt={`${movie.title} poster`} />
                <section className='poster-aside'>
                  <p className='movie-title'><b>{movie.title}</b></p>
                  <section className='ratings-box'>
                    <p className='user-rating-title'><b>Average User Rating:</b></p>
                    <p className='rating'>{movie.average_rating.toFixed(2)} /10</p>
                    <p className='rating-emoji'>{determineApproval(movie.average_rating)}</p>
                  </section>
                </section>
              </section>
        
              <section className='overview-box'>
                <p className='overview-title'><b>Movie Info:</b></p>
                <p className='overview-text'>{movie.overview}</p>
              </section>
              <ListItem label='Genre:' body={ formatGenres(movie) } />
              <ListItem label='Release Date:' body={movie.release_date} />
              { formatNum(movie.budget, 'Budget') }
              { formatNum(movie.revenue, 'Total Revenue') }
              <ListItem label='Runtime:' body={movie.runtime} />
            </section> 
          </section>

        <section className='side-panel'>
        </section>
      </section>
    </section>
  );
}

export default MovieDetails;