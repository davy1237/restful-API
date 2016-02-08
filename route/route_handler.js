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
var BSON = mongo.BSONPure;
var app = express();
//var router = express.Router();

/* Connect to database */
var mongoUri = process.env.MONGOLAB_URI ||
   process.env.MONGOHQ_URL || 
   'mongodb://localhost/server'; 
var db = mongoskin.db(mongoUri)

mongoose.connect(mongoUri);

//db.open;
var Collection = db.collection('Objects')

/* Defines an Object and its methods */
var object = require('../Object/Schema');

exports.object = object;


// app.param('Objects', function(req, res, next, Objects){
//   req.collection = db.collection(Objects)
//   return next()
// })

//works
exports.getById = function(req, res) {
	var id = req.params.id;
	Collection.findOne({'_id':new ObjectId(id) }, function(err, result){
    
    if (err) 
    	return next(err)
    res.send(result)
  })
};

//works
exports.getAll = function(req, res) {
	Collection.find().toArray(function(err, results){
	
	if (err) 
		return next(err)
    res.send(results);
	})
};

//works
exports.post = function(req, res) {
	var body = req.body
	Collection.insert({body}, {}, function(err, results) {
		
	if (err)
		return next(err)
	res.send(results.ops);
	})

};

exports.put = function(req, res) {
	var id = req.params.id;
	var body = req.body;
	Collection.remove({'_id':new ObjectId(id) }, function(err, result){
    if (err) 
    	return next(err);
    })

	Collection.insert({'_id':new ObjectId(id), body }, {}, function(err, result){
    
    if (err) 
    	return next(err)

    res.send(result.ops)
	});
    //res.send(req.id)
    //res.send(id)

};

//works
exports.delete = function(req, res) {
	var id = req.params.id;
    console.log('Deleting Objects: ' + id);
    Collection.remove({'_id':new ObjectId(id) }, function(err, result){
    if (err) 
    	return next(err);
    })
    res.send();
}


// 	var id = req.params.id;
//     console.log('Deleting object: ' + id);
// 	Collection.remove({'_id':new BSON.ObjectID(id)});
// };

//db.close;
