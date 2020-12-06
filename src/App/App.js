import React, {Component} from 'react';
import Header from '../Header/Header';
import MovieContainer from '../MovieContainer/MovieContainer';
import MovieDetails from '../MovieDetails/MovieDetails';
// import movieData from '../data.js';
import './App.css';
import { fetchSingleMovie, fetchMovies } from '../apiCalls';

class App extends Component {
	constructor() {
		super();
		this.state = {
			movies: [],
      movie: null,
      error: ''
		}
	}

  componentDidMount = () => {
    fetchMovies().then(data => this.setState({ movies: data.movies }))
    .catch(error => this.setState({ error: error.message }))
  }

	getSingleMovie = (id) => {
    fetchSingleMovie(id)
    .then(data => this.setState({ movie: data.movie }))
    .catch(error => this.setState({ error: error.message }))
	}

	goHome = () => {
		this.setState({ movie: null })
	}

	render() {
		return (
			<main className="App">
				<header>
					<h1>Rancid Tomatillos</h1>
					<nav>
						{this.state.movie && <button onClick={() => {this.goHome()}}>Back</button>}
					</nav>
				</header>
				{this.state.movie === null ? 
				<MovieContainer movies={this.state.movies} getSingleMovie={this.getSingleMovie} error={this.state.error} /> :
				<MovieDetails movie={this.state.movie} error={this.state.error} />}
			</main>
		);
	}
}

export default App;
