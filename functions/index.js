// @ts-check

require('zone.js/dist/zone-node');

const functions = require('firebase-functions');
const express = require('express');
const path = require('path');
const join = path.join;
const {ngExpressEngine } = require ('@nguniversal/express-engine');

const { enableProdMode } = require('@angular/core');
const { renderModuleFactory } = require('@angular/platform-server');
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist-server/main.bundle');

enableProdMode();

const DIST_FOLDER = join(process.cwd(), 'dist');

const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');

let app = express();

app.engine(
  'html',
  ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [provideModuleMap(LAZY_MODULE_MAP)],
  })
);

app.set('view engine', 'html');
app.set('views', DIST_FOLDER);

app.get('*', (req, res) => {
  res.render(join(DIST_FOLDER, 'index-1.html'), {req});
});

exports.ssrapp = functions.https.onRequest(app);
