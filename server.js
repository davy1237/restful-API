/*
 * Author: David Stern
 *
 * Purpose: Set up a simple API with 4 functions (GET, PUT, POST, DELETE)
 * using Node.js, the express library and mongoDB.
 *
 * Last modified: 01/31/2016
 *
 */

/* Dependencies */
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

/* Using express*/
var app = express();
app.use(bodyParser.urlencoded({'extended':'true'}));
var json = app.use(bodyParser.json());

/* Sets up json format */
app.set('json spaces', 2);

/* Initialize database */
var mongodbURI = 'mongodb://heroku_r9r6przz:jpainoon2gdqreqcugivit87k1@ds049854.mongolab.com:49854/heroku_r9r6przz';
mongoose.connect(mongodbURI);

/* Route Handling */
app.use('/server', require('./route/route_handler'));

var port = Number(process.env.Port || 3000);

/* Starts server */
app.listen(port);
