const mongoose = require('mongoose');
const db = require('./connection').db;
//mongoose.connect('mongodb://localhost/fetcher');

/*
So I'm thinking:
Per Record:
-UNIQUE Primary Key
-Listing Photo
-Room type (Loft, apartment, home)
-Private/Shared
-Price per night
-Number of Reviews
-Average rating by Star
- List of other keys of other listings of relation
  -Related by price range
  -Geographic location?
*/
//Have to look up the types of each type 

let listingSchema = mongoose.Schema({
  // photo: String,
  // related_homes: [Number]
  price: Number,
  review_count: Number,
  average_rating: Number,
  listing_id: Number,
  property_type: String,
});


let Listing = mongoose.model('Listing', listingSchema);

const retrieveAll = () => {
  return Listing.find({}).exec();
}

const retrieveOne = (id) => {
  return Listing.find({listing_id: id}).exec();
};
module.exports.Listing = Listing;
module.exports.retrieveAll = retrieveAll;
module.exports.retrieveOne = retrieveOne;
