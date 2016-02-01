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
var mongodbURI = 'mongodb://davy1237:davy1237@ds055515.mongolab.com:55515/sample1237';

/* Route Handling */
app.use('/server', require('./route/route_handler'));

/* Starts server */
app.listen(5000);
