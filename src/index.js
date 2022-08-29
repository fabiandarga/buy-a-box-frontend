import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = createRoot(document.getElementById('root'));

// compile App component in `#app` HTML element
if (process.env.REACT_APP_BUILD_TARGET === 'dev') {
  // eslint-disable-next-line no-console
  console.log('Starting Dev Mode');
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
} else {
  // eslint-disable-next-line no-console
  console.log('Hydrating App');
  root.hydrate(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
