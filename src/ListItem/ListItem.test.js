import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ListItem from './ListItem';

describe('ListItem', () => {
  it('should render correctly', () => {

    render(
      <ListItem 
        label='Runtime:' 
        body={123} 
      />
    );
    
    const label = screen.getByText('Runtime:');
    const body = screen.getByText('123');

    expect(label).toBeInTheDocument();
    expect(body).toBeInTheDocument();
  });
});