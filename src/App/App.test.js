import React from 'react';
import { fireEvent, screen, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { fetchMovies } from '../apiCalls.js'
import App from './App';
import { MemoryRouter, Router } from 'react-router-dom'
import { createMemoryHistory } from 'history';
jest.mock('../apiCalls');

describe('App', () => {
	let history;
	beforeEach(() => {
		fetchMovies.mockResolvedValueOnce({movies: [{id:694919, 
			poster_path:"https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
			backdrop_path :"https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
			title:"Money Plane" ,
			average_rating:6.666666666666667,
			release_date:"2020-09-29"
		}	,{id:337401, 
			poster_path:"https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
			backdrop_path: "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
			title:"Mulan",
			average_rating:4.909090909090909,
			release_date:"2020-09-04"}]
		})

		history = createMemoryHistory();
	})

	it.skip('should render correctly on page load', () => {
		// fetchMovies.mockResolvedValueOnce({
		// 	movies: [
		// 		{
		// 			"id": 1,
		// 			"title": "Money Plane",
		// 		}, {
		// 			"id": 2,
		// 			"title": "Borat",
		// 		}
		// 	]
		// })
		render(
			<MemoryRouter>
				<App />
			</MemoryRouter>)

		expect(screen.getByText('Rancid Tomatillos')).toBeInTheDocument();
	})

	it('should render movie cards on page load', async () => {
		
		render(
			<Router history={history}>				
				<App />
			</Router>)
		const movieTitle = await waitFor(() => screen.getByText('Money Plane'));
		const movieTitle2 = await waitFor(() => screen.getByText('Borat'));

		expect(movieTitle).toBeInTheDocument();
		expect(movieTitle2).toBeInTheDocument();
	})

	it('should render single movie on click', async () => {
		
		// fetchSingleMovie.mockResolvedValueOnce({
		// 	movie: {
		// 		"id": 2,
    //     "title": "Money Plane",
    //     "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
    //     "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
    //     "release_date": "2020-09-29",
    //     "overview": "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",
    //     "genres": [
    //       "Action"
    //     ],
    //     "budget": 0,
    //     "revenue": 0,
    //     "runtime": 82,
    //     "tagline": "",
    //     "average_rating": 6.666666666666667
		// 	}
		// })
		
		// const movieCard = screen.getByText('Money Plane');
		
		// fireEvent.click(movieCard);
		
		// const runTime = await waitFor(() => screen.getByText('Runtime: 82 minutes'));
	
		// expect(runTime).toBeInTheDocument();
		
	})

})
//history.location.pathname
		// console.log(history)
		// expect history.pathname to be /
		