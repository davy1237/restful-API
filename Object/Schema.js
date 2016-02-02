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
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/* Creates object Schema to be dynamic */
///////////////// turn off version key here /////////////
var objectSchema = new Schema({any: {}}, {strict: false}, 
                                         { versionKey: false });
/* Returns */
var object = mongoose.model('Object', objectSchema);
module.exports = object;