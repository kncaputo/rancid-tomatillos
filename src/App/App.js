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
			error: '',
			statusCode: 0
		}
	}

  componentDidMount = () => {
		fetchMovies()
		.then(data => {
			if(typeof data === 'object') {
				this.setState({ movies: data.movies })
			} else {
				this.setState({ statusCode: data })
			}
		})
		.catch(error => this.setState({ error: error.message }))
	}
	
	getSingleMovie = (id) => {
    fetchSingleMovie(id)
    .then(data => {
			if(typeof data === 'object') {
				this.setState({ movie: data.movie })
			} else {
				this.setState({ statusCode: data })
			}
		})
		.catch(error => this.setState({ error: error.message }))
	}

	goHome = () => {
		this.setState({ movie: null, statusCode: 0})
	}

	render() {
		return (
			<main className="App">
				<header>
					<h1>Rancid Tomatillos</h1>
					<nav>
						{(this.state.movie || this.state.statusCode > 400) && <button onClick={() => {this.goHome()}}>Back</button>}
					</nav>
				</header>
				{this.state.movie === null ? 
				<MovieContainer 
					movies={this.state.movies} 
					getSingleMovie={this.getSingleMovie} 
					statusCode={this.state.statusCode}  
					error={this.state.error} /> :
				<MovieDetails 
					movie={this.state.movie}
					statusCode={this.state.statusCode}  
					error={this.state.error} />}
			</main>
		);
	}
}

export default App;
