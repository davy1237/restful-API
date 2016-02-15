/*
 * Author: David Stern
 *
 * Purpose: Set up router handling.
 *
 * Last modified: 01/31/2016
 *
 */

/* Dependencies */
var express = require('express');
var mongoose = require ('mongoose');
var mongo = require('mongodb');
var mongoskin = require('mongoskin');
var ObjectId = mongo.ObjectId;
var app = express();

/* Connect to database */
var mongoUri = process.env.MONGOLAB_URI ||
   process.env.MONGOHQ_URL || 
   'mongodb://localhost/server';

mongoose.connect(mongoUri);

var db = mongoskin.db(mongoUri)
var Collection = db.collection('Objects')

/* Defines an Object and its methods */
var object = require('../Object/Schema');

exports.object = object;

/* Get object by id */
exports.getById = function(req, res) {
	var id = req.params.id;
	Collection.findOne({'_id':new ObjectId(id) }, function(err, result){
    
    if (err) 
    	throw err
    res.send(result)
  })
};

/* Get all objects */
exports.getAll = function(req, res) {
	Collection.find().toArray(function(err, results){
	
	if (err) 
		throw err
    res.send(results)
	})
};

/* Post Object */
exports.post = function(req, res) {
	Collection.insert(req.body, {}, function(err, results) {
	if (err)
		throw err
	res.send(results.ops)
	})
}

/* Update Object */
exports.put = function(req, res) {
	var id = req.params.id;
	var body = req.body;

    Collection.update({'_id': new ObjectId(id)}, {$set:req.body}, {multi:false}, function(err, results){
   	 if (err) 
    	throw err

  	  Collection.findOne({'_id':new ObjectId(id) }, function(errs, result){
    
  	  if (errs) 
 		   	throw errs
  	  res.send(result)
  	  })
  	})
	
};

/* Remove Object */
exports.delete = function(req, res) {
	var id = req.params.id
    Collection.remove({'_id':new ObjectId(id) }, function(err, result){
    if (err) 
    	throw err
    })
    res.send()
};
