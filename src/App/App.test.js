import React from 'react';
import { fireEvent, screen, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { fetchMovies, fetchSingleMovie, fetchTrailers } from '../apiCalls.js'
import App from './App';
import { MemoryRouter } from 'react-router-dom'
import { mockSingleMovieData, mockMovieData, mockMovieTrailers } from '../data';
jest.mock('../apiCalls');

describe('App', () => {
	beforeEach(() => {
		fetchMovies.mockResolvedValueOnce({movies: mockMovieData});
		
		render(
			<MemoryRouter>
				<App />
			</MemoryRouter>)
	});

	it('should render page header on page load', () => {
		expect(screen.getByText('Rancid Tomatillos')).toBeInTheDocument();
	});

	it('should render movie cards on page load', async () => {
		const movieTitle = await waitFor(() => screen.getByText('Money Plane'));
		const movieTitle2 = await waitFor(() => screen.getByText('Mulan'));

		expect(movieTitle).toBeInTheDocument();
		expect(movieTitle2).toBeInTheDocument();
	});

	it('should render single movie on click', async () => {
		fetchSingleMovie.mockResolvedValueOnce(mockSingleMovieData);
		fetchTrailers.mockResolvedValueOnce(mockMovieTrailers);

		const movieCard = screen.getByText('Rogue');
		
		fireEvent.click(movieCard);
		
		const runTime = await waitFor(() => screen.getByText('106'));
	
		expect(runTime).toBeInTheDocument();
	});
});