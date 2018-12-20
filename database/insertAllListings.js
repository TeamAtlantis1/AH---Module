var mockData = require ('./MOCK_DATA');
var db = require('./connection');
var mongoose = require('mongoose');
var schema = require('./index');
// Fill in the definition of insertAllPokemon so that when 
// this file is run in the terminal with `node insertAllPokemon.js`, 
// all 151 pokemon are inserted into the database
var insertAllListings = function() {
  schema.collection.insertMany(mockData, function(err, r) {
    db.close();
  });
};

// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with
insertAllListings();
