// https://github.com/angular/angular-cli/wiki/stories-universal-rendering
// These are important and needed before anything else
import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { renderModuleFactory } from '@angular/platform-server';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import { enableProdMode } from '@angular/core';

import * as express from 'express';
import { join } from 'path';
import { readFileSync } from 'fs';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(__dirname, '../');

// Our index.html we'll use as our template
// const template = readFileSync(join(DIST_FOLDER, 'index.html')).toString();

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('../../dist-server/main.bundle');

// app.engine('html', (_, options, callback) => {
//   renderModuleFactory(AppServerModuleNgFactory, {
//     // Our index.html
//     document: template,
//     url: options.req.url,
//     // DI so that we can get lazy-loading to work differently (since we need it to just instantly render it)
//     extraProviders: [
//       provideModuleMap(LAZY_MODULE_MAP)
//     ]
//   }).then(html => {
//     callback(null, html);
//   });
// });

// Use ngExpressEngine
app.engine(
  'html',
  ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [provideModuleMap(LAZY_MODULE_MAP)],
  })
);

app.set('view engine', 'html');
app.set('views', DIST_FOLDER);

// Server static files from /browser
app.use(express.static(DIST_FOLDER, { index: false }));

// All regular routes use the Universal engine
app.get('/*', (req, res) => {
  res.render(join(DIST_FOLDER, 'index.html'), { req, res });
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});
