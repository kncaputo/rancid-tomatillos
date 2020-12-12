import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieContainer from './MovieContainer';
import { MemoryRouter } from 'react-router-dom';
import { mockMovieData } from '../data';

describe('MovieContainer', () => {
  it('should render movie card correctly on page load', () => {
    const mockGetSingleMovie = jest.fn();

    render(
      <MemoryRouter>
        <MovieContainer 
          movies={mockMovieData} 
          getSingleMovie={mockGetSingleMovie}  
          error=''
        />
      </MemoryRouter>
    );

    expect(screen.getByText('Money Plane')).toBeInTheDocument();
    expect(screen.getByText('Mulan')).toBeInTheDocument();
  });

  // it('should render an error if no movies are found', () => {
      
  // })
})