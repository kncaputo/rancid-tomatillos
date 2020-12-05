import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieDetails from './MovieDetails';


describe('MovieDetails', () => {
	it('should render a single movie', () => {
		
		const singleMovie = {
			'movie': {
				'id':718444,
				'title':'Rogue',
				'poster_path':'https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg',
				'backdrop_path':'https://image.tmdb.org/t/p/original//x4UkhIQuHIJyeeOTdcbZ3t3gBSa.jpg',
				'release_date':'2020-08-20',
				'overview':'Battle-hardened O’Hara leads a lively mercenary team of soldiers on a daring mission: rescue hostages from their captors in remote Africa. But as the mission goes awry and the team is stranded, O’Hara’s squad must face a bloody, brutal encounter with a gang of rebels.',
				'genres':['Action'],
				'budget':0,
				'revenue':0,
				'runtime':106,
				'tagline':'When the hunter becomes the prey.',
				'average_rating':6.428571428571429}
			}

		render( <MovieDetails movie={singleMovie.movie} />)
		const title = screen.getByText('Rogue');
		const releaseDate = screen.getByText('Release Date: 2020-08-20');
		const genres = screen.getByText('Genre: Action');

		expect(title).toBeInTheDocument();
		expect(releaseDate).toBeInTheDocument();
		expect(genres).toBeInTheDocument();
	})
})