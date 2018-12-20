var mockData = require ('./MOCK_DATA').mockData;
var db = require('./connection');
var mongoose = require('mongoose');
var Listing = require('./index').Listing;

const assignProperty = function(){
  var types = ['PRIVATE ROOM IN APARTMENT', 'ENTIRE APARTMENT', 'PRIVATE ROOM IN CONDOMINIUM', 'SHARED ROOM IN APARTMENT', 
    'ENTIRE GUEST SUITE', 'ENTIRE GUESTHOUSE', 'PRIVATE ROOM IN HOUSE', 'ENTIRE HOUSE']
  return types[Math.floor(types.length * Math.random())];
}

const assignPhoto = function(){
  return Math.floor(20 * Math.random() + 1);
}

var insertAllListings = function() {
  for(var i = 0; i < mockData.length; i++){
    mockData[i].listing_id = i+1;
    mockData[i].property_type = assignProperty();
    console.log(mockData[i]);
    Listing.collection.insert(mockData[i], function(err, r){
      if(err){
        console.log('Error!', err);
      } else {
        console.log('Success!', r)
      }
    })
  }
  // Listing.insertMany(mockData, function(err, r) {
  //   if(err){
  //     console.log('Error!', err);
  //   } else {
  //     console.log('Success!', r)
  //   }
  //   db.close();
  // });
};

insertAllListings();
