import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ErrorBoundary.css';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false 
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return(
        <section>
          <h2>Something went wrong.</h2>
        	  <Link to='/' onClick={() => {this.setState({ hasError: false})}}>
							<button className='all-movies'>
								Back to All Movies
							</button>
						</Link>
        </section>    
      )
    }
    return this.props.children;
  }
}

export default ErrorBoundary;