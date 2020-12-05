import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { fetchSingleMovie, fetchMovies } from '../apiCalls.js'
import App from './App';
jest.mock('../apiCalls');

describe('App', () => {
	beforeEach(() => {
		fetchMovies.mockResolvedValueOnce({
			movies: [{
				"id": 1,
				"title": "Money Plane",
			}, {
				"id": 2,
				"title": "Borat",}
		]})
		fetchSingleMovie.mockResolvedValueOnce({
			'id': 2,
			'title':'Borat',
		})

		render(<App />)
	})

	it('should render correctly on page load', () => {
		expect(screen.getByText('Rancid Tomatillos')).toBeInTheDocument();
	})

	it('should render movie cards on page load', async () => {
		const movieTitle = await waitFor(() => screen.getByText('Money Plane'));
		const movieTitle2 = await waitFor(() => screen.getByText('Borat'));

		expect(movieTitle).toBeInTheDocument();
		expect(movieTitle2).toBeInTheDocument();
	})

	
})
