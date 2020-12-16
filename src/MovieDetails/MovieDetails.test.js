import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router';
import MovieDetails from './MovieDetails';
import { mockSingleMovieData } from '../data';
jest.mock('../apiCalls');

describe('MovieDetails', () => {
	it('should render a single movie', () => {
	const mockGetSingleMovie = jest.fn();
		mockGetSingleMovie.mockResolvedValueOnce(mockSingleMovieData.movie)
		
		render( 
			<MemoryRouter>
				<MovieDetails 
					movie={mockSingleMovieData.movie} 
					resetState={jest.fn()}
					getSingleMovie={mockGetSingleMovie} 
				/>
			</MemoryRouter>
		);

		const title = screen.getByText('Rogue');
		const releaseDate = screen.getByText('2020-08-20');
		const genres = screen.getByText('Action');
		const rating = screen.getByText('6.43 /10')

		expect(title).toBeInTheDocument();
		expect(releaseDate).toBeInTheDocument();
		expect(genres).toBeInTheDocument();
		expect(rating).toBeInTheDocument();
	});
});