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
      movie: [],
      error: ''
		}
	}
  componentDidMount = () => {
    fetchMovies().then(data => this.setState({ movies: data.movies }))
    .catch(error => this.setState({ error }))
  }

	getSingleMovie = (id) => {
    //taking a quick pom!! I think we need to set const clickedMovie = fetchSingleMovie(id), then 
    //setState({movie: clickedMovie})
    fetchSingleMovie(id)
    .then(data => console.log(data))
    .catch(error => this.setState({ error }))
	}

	goHome = () => {
		this.setState({movie: {}})
	}

	render() {
		return (
			<main className="App">
				<header>
					<h1>Rancid Tomatillos</h1>
					<nav>
						{Object.keys(this.state.movie).length > 0 && <button onClick={() => {this.goHome()}}>Back</button>}
					</nav>
				</header>
        {this.state.movie.length === 0 && this.state.error === '' && <MovieContainer movies={this.state.movies} getSingleMovie={this.getSingleMovie}/>}
				{this.state.movie.length > 0 && <MovieDetails movie={this.state.movie}/>}


				{/* {Object.keys(this.state.movie).length === 0 && this.state.error === '' && <MovieContainer movies={this.state.movies} getSingleMovie={this.getSingleMovie}/>}
				{Object.keys(this.state.movie).length > 0 && <MovieDetails movie={this.state.movie}/>} */}
			</main>
		);
	}
}

export default App;
