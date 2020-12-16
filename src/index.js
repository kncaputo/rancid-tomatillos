import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename='/rancid-tomatillos'>
      <App />
    </BrowserRouter >
  </React.StrictMode>,
  document.getElementById('root')
);
