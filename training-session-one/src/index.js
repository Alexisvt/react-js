// React must to be present on every page that we use jsx
import React from 'react';
import { render } from 'react-dom';
import App from './App';

// render the component to the website
render(
  <App />,
  document.getElementById('root')
);
