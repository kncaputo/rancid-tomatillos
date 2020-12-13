import React, { Component } from 'react';
import './ErrorContainer.css';

class ErrorContainer extends Component {
  constructor({ error }) {
    super({ error });
    this.state = {
      error: error
    }
  }

  
}

export default ErrorContainer;