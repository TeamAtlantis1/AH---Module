const mongoose = require('mongoose');
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
  // listing_id: Number,
  // photo: String,
  // property_type: String,
  // related_homes: [Number]
  price: Number,
  review_count: Number,
  average_rating: Number,
});

let Listing = mongoose.model('Listing', listingSchema);
 
module.exports.Listing = Listing;
