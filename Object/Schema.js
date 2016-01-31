/*
 * Author: David Stern
 *
 * Purpose: Create an object schema
 *
 * Last modified: 01/31/2016
 *
 */

/* Dependencies */
var express = require('express');
var rest = require('node-restful');
var rest_mongoose = rest.mongoose;
var Schema = rest_mongoose.Schema;

/* Creates object Schema to be dynamic */
var objectSchema = new Schema({any: {}}, {strict: false});

/* Returns */
var object = rest.model('Object', objectSchema);
module.exports = object;