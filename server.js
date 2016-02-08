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
var mongoskin = require('mongoskin');
var bodyParser = require('body-parser');
var objects = require('./route/route_handler.js');

/* Using express*/
var app = express();
app.use(bodyParser.urlencoded({'extended':'true'}));
var json = app.use(bodyParser.json());

/* Sets up json format */
app.set('json spaces', 2);

/* Route Handling */
app.get('/server', objects.getAll);
app.get('/server/:id', objects.getById);
app.post('/server', objects.post);
app.put('/server/:id', objects.put);
app.delete('/server/:id', objects.delete);


/* Starts server */
app.listen(process.env.PORT || 5000);
