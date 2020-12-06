export const fetchMovies = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
  .then(response => response.json())
}

export const fetchSingleMovie = (id) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movie/${+id}`)
  .then(response => response.json())
}