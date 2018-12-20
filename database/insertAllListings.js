var mockData = require ('./MOCK_DATA');
var db = require('./connection');
var mongoose = require('mongoose');
var schema = require('./index');

var insertAllListings = function() {
  schema.collection.insertMany(mockData, function(err, r) {
    db.close();
  });
};

insertAllListings();
