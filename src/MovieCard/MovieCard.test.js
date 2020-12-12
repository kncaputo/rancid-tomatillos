import React from 'react';
import { fireEvent, screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieCard from './MovieCard';
import { MemoryRouter } from 'react-router-dom'
 
describe('MovieCard', () => {
  let mockGetSingleMovie;

  beforeEach(() => {
    mockGetSingleMovie = jest.fn();

    render(
      <MemoryRouter>
        <MovieCard
          title='Money Plane'
          src='https://image.tmdb.org'
          alt='Money Plane'
          rating={6.999}
          id={1}
          key={1}
          getSingleMovie={mockGetSingleMovie}
        />
      </MemoryRouter>
    );
  });

  it('should render correctly', () => {
    const title = screen.getByText('Money Plane');
    const altText = screen.getByText('Money Plane');

    expect(title).toBeInTheDocument();
    expect(altText).toBeInTheDocument();
  });

  it('should call getSingleMovie with the correct id', () => {
    const movieCard = screen.getByText('Money Plane');
    fireEvent.click(movieCard);

    expect(mockGetSingleMovie).toHaveBeenCalledWith(1);
  });
});

