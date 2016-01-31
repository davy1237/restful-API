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
var router = express.Router();

/* Defines an Object and its methods */
var object = require('../Object/Schema');
object.methods(['get', 'put', 'post', 'delete']);
object.register(router,'/objects');

/* Returns a router */
module.exports = router;