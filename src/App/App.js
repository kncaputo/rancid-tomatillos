import React, {Component} from 'react';
import { Route, NavLink, Link, Redirect, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import MovieContainer from '../MovieContainer/MovieContainer';
import MovieDetails from '../MovieDetails/MovieDetails';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
// import { ErrorBoundary, resetComponentState } from 'react-error-boundary';
import ReactPlayer from 'react-player';
import './App.css';
import { fetchSingleMovie, fetchMovies, fetchTrailers } from '../apiCalls';

class App extends Component {
	constructor() {
		super();
		this.state = {
			movies: [],
      movie: null,
			error: '',
			isMovieDetails: false,
			movieTrailers: []
		}
	}
	
  componentDidMount = () => {
		fetchMovies()
		.then(data => {
			this.setState({ movies: data.movies })
		})
		.then(() => {
			if (window.location.pathname !== '/') {
				this.getSingleMovie(window.location.pathname.slice(1))
				return(
					<MovieDetails  
						movie={this.state.movie} 
						error={this.state.error}
						// movieTrailers={this.state.movieTrailers[0]}
					/>
				);
			}	
		})
		.catch(error => this.setState({ error: error.message }))
	}
	
	getSingleMovie = (id) => {
		fetchSingleMovie(id)
    .then(data => {
			this.setState({ movie: data.movie, isMovieDetails: true })
		})
		.catch(error => this.setState({ error: error.message }))

		this.getMovieTrailers(id);
	}

	getMovieTrailers = (id) => {
		fetchTrailers(id)
		.then(data => this.setState({ movieTrailers: data.videos }))
		.catch(error => console.log(error))
	}

	goHome = () => {
		this.setState({ isMovieDetails: false, movie: null, movieTrailers: [] })
	}

	render() {
		return (
			<main className="App">
				<header>
					<h1>Rancid Tomatillos</h1>
				
					<nav>
						<NavLink to='/'>
							{this.state.isMovieDetails && 
								<button 
									onClick={() => {this.goHome()}}
								>
									All Movies
								</button>}
						</NavLink>
					</nav>
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
										error={this.state.error} 
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
									<h1>Whoops, it looks like something went wrong. Try refreshing the page or return to all movies.</h1>
									// <Redirect to='/' component={MovieContainer}/>
								);
							}
							return (	
								<ErrorBoundary>
									<MovieDetails  
										movie={this.state.movie} 
										// movieTrailers={this.state.movieTrailers[0]}
									/>
								</ErrorBoundary>		
							);
						}}
					/>
				</Switch>
			</main>
		);
	}
}

export default App;
