import React from 'react';
import { fireEvent, screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieCard from './MovieCard';

describe('MovieCard', () => {
  beforeEach() {
    const mockGetSingleMovie = jest.fn();

    render(
      <MovieCard
        title='Money Plane'
        src='https://image.tmdb.org'
        alt='Money Plane'
        id={1}
        key={1}
        getSingleMovie={mockGetSingleMovie}
      />
    );
  }

  it('should render correctly', () => {
    const title = screen.getByText('Money Plane');
    const altText = screen.getByText('Money Plane');

    expect(title).toBeInTheDocument();
    expect(altText).toBeInTheDocument();
  })

  it('should call getSingleMovie with the correct id', () {
    const mockGetSingleMovie = jest.fn();

    const movieCard = screen.getByText('Money Plane')
    fireEvent.click(movieCard);

    expect(mockGetSingleMovie).toHaveBeenCalledWith(2);
  })
})

