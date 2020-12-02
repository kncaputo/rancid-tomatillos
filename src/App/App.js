import React, {Component} from 'react';
import MovieContainer from '../MovieContainer/MovieContainer';
import movieData from '../data.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies
    }
  }

  render() {
    return (
      <main className="App">
        <MovieContainer movies={this.state.movies}/>
      </main>
    );
  }
}

export default App;
