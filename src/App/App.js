import React, {Component} from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import MovieContainer from '../MovieContainer/MovieContainer';
import MovieDetails from '../MovieDetails/MovieDetails';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
// import ReactPlayer from 'react-player';
import './App.css';
import { fetchSingleMovie, fetchMovies, fetchTrailers } from '../apiCalls';

class App extends Component {
	constructor() {
		super();
		this.state = {
			movies: [],
      movie: null,
			error: '',
			movieTrailers: []
		}
	}
	
  componentDidMount = () => {
		fetchMovies()
		.then(data => {
			if (window.location.pathname === '/') {
				this.setState({ movies: data.movies })
			}
		})
		.then(() => {
			if (window.location.pathname !== '/') {
				this.getSingleMovie(+window.location.pathname.slice(1))
			}
		})
		.catch(error => this.setState({ error: error.message }))
	}
	
	getSingleMovie = async (id) => {
		return await fetchSingleMovie(id)
    .then(data => {
			this.setState({ movie: data.movie })
		})
		// .then(() => {
		// 	return this.getMovieTrailers(id)
		// })
		.catch(error => this.setState({ error: error.message }))
	}

	getMovieTrailers = (id) => {
		fetchTrailers(id)
		.then(data => this.setState({ movieTrailers: data.videos }))
		.catch(error => console.log(error))
	}

	resetState = () => {
		this.setState({ movie: null, movieTrailers: [] })
	}

	render() {
		return (
			<main className="App">
				<header>
					<h1>Rancid Tomatillos</h1>
				</header>
				<Switch>
					<Route 
						exact 
						path='/' 
						render={() => {
							return (
								<ErrorBoundary>
									<MovieContainer 
										movies={this.state.movies} 
										getSingleMovie={this.getSingleMovie}  
									/>
								</ErrorBoundary>
							);
						}}
					/> 
					<Route 
						exact
						path='/:id'
						render={() => {
							if (!this.state.movie) {
								return(
									<section>
										<h2>Whoops, it looks like something went wrong. Try refreshing the page or return to all movies.</h2>
										<Link to='/' onClick={() => this.resetState()}>
											<button className='back'>Back to Movies</button>
										</Link>
									</section>
								);
							}
							if (this.state.movie) { 
								return (	
									<ErrorBoundary>
										<MovieDetails  
											movie={this.state.movie} 
											resetState={this.resetState}
											getSingleMovie={this.getSingleMovie}
											// movieTrailers={this.state.movieTrailers[0]}
										/>
									</ErrorBoundary>		
								);
							}
						}}
					/>
				</Switch>
			</main>
		);
	}
}

export default App;
