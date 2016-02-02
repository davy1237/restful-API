/*
 * Author: David Stern
 *
 * Purpose: Set up router handling.
 *
 * Last modified: 01/31/2016
 *
 */

////////change this big time////////
/* Dependencies */
var express = require('express');
var mongoose = require ('mongoose');
var mongo = require('mongodb');
//var router = express.Router();

/* Connect to database */
var mongoUri = /*process.env.MONGOLAB_URI ||
   process.env.MONGOHQ_URL || */
   'mongodb://localhost/server'; 

var db = mongoose.connect(mongoUri);

/* Defines an Object and its methods */
var object = require('../Object/Schema');

exports.object = object;

exports.getById = function(req, res) {
	var id = req.params.id;
	db.collection('objects', function(err, collection) {
        collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
            res.send(item);
        });
    });
};

exports.getAll = function(req, res) {
	db.collection('objects', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};

exports.post = function(req, res) {

};

exports.put = function(req, res) {

};

exports.delete = function(req, res) {

};

//////////////////////////create functions here///////////////////////
//object.methods(['get', 'put', 'post', 'delete']);
//object.register(router,'/objects');

/* Returns a router */
//module.exports = router;