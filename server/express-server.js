import express from 'express';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import enforce from 'express-sslify';

// import App component
import App from '../src/App';

const { StaticRouter } = require('react-router-dom/server');

// create express application
const app = express();

if (process.env.NODE_BUILD_TARGET !== 'dev') {
  // Use enforce.HTTPS({ trustProtoHeader: true }) in case you are behind
  // a load balancer (e.g. Heroku). See further comments below
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
}

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

const PORT = process.env.PORT || '9000';

app.listen(PORT, () => {
  console.log('Express server started at http://localhost:9000');
});
