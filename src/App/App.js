import React, {Component} from 'react';
import Header from '../Header/Header';
import MovieContainer from '../MovieContainer/MovieContainer';
import MovieDetails from '../MovieDetails/MovieDetails';
import movieData from '../data.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      movie: {}
    }
  }

  // getSingleMovie = (movieId) => {
  //   const clickedMovie = movieData.movies.find(singleMovie => {
  //     return singleMovie.id === movieId
  //   }
  //   // let updatedMovie = {movie: clickedMovie}
  //   this.setState({movie: clickedMovie})
  // }


  render() {
    return (
      <main className="App">
        <Header />
        <MovieContainer movies={this.state.movies} getSingleMovie={this.getSingleMovie}/>
        {!this.state.movie && <MovieDetails />}
      </main>
    );
  }
}

export default App;
