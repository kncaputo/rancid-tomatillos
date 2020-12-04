import React from 'react';
import { fireEvent, screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import MovieCard from "./MovieCard";

describe('MovieCard', () => {
  it('should render correctly', () => {
    render(
      <MovieCard
        title='Money Plane'
        src='https://image.tmdb.org'
        alt='Money Plane'
        id={1}
        key={1}
        getSingleMovie={jest.fn()}
      />
    );
    const title = screen.getByText('Money Plane');
    const altText = screen.getByText('Money Plane');
    

    expect(title).toBeInTheDocument();
    expect(altText).toBeInTheDocument();
    // TODO: Test for id and key
  })
})

