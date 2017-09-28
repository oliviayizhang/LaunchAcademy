import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import MoviesContainer from './containers/MoviesContainer';

ReactDOM.render(
  <MoviesContainer />,
  document.getElementById('app')
)
