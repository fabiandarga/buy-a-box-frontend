import express from 'express';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';

// import App component
import App from '../src/App';

const { StaticRouter } = require('react-router-dom/server');

// create express application
const app = express();

// serve static assets
app.get(/\.(js|css|map|ico)$/, express.static(resolve(__dirname, '../build')));

// for any other requests, send `index.html` as a response
app.use('*', (req, res) => {
  // read `index.html` file
  const indexHTML = readFileSync(resolve(__dirname, '../build/index.html'), {
    encoding: 'utf8',
  });

  // get HTML string from the `App` component
  const appHTML = renderToString(
    <StaticRouter location={req.originalUrl}>
      <App />
    </StaticRouter>
  );

  // populate `#app` element with `appHTML`
  const renderedHTML = indexHTML.replace(
    '<div id="root"></div>',
    `<div id="root">${appHTML}</div>`
  );

  // set header and status
  res.contentType('text/html');
  res.status(200);

  return res.send(renderedHTML);
});

// run express server on port 9000
app.listen('9000', () => {
  console.log('Express server started at http://localhost:9000');
});
