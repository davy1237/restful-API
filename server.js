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

/* Connect to database */
var mongoUri = process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/server'; 
var mongo = require('mongodb');
var db = mongoose.connect(mongoUri, function (error, databaseConnection) {
  db = databaseConnection;
});
/* Route Handling */
app.use('/server', require('./route/route_handler'));

/* Starts server */
app.listen(5000);
