var mockData = require ('./MOCK_DATA').mockData;
var db = require('./connection');
var mongoose = require('mongoose');
var Listing = require('./index').Listing;

var insertAllListings = function() {
  console.log(mockData[0]);
  Listing.insertMany(mockData, function(err, r) {
    if(err){
      console.log('Error!', err);
    } else {
      console.log('Success!', r)
    }
    db.close();
  });
};

insertAllListings();
