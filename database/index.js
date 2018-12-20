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
  photo: String,
  property_type: String,
  price: Number,
  review_count: Number,
  average_rating: Number,
  related_homes: [Number]
});

let Repo = mongoose.model('Repo', listingSchema);

const assignProperty = function(){
  var types = ['PRIVATE ROOM IN APARTMENT', 'ENTIRE APARTMENT', 'PRIVATE ROOM IN CONDOMINIUM', 'SHARED ROOM IN APARTMENT', 
    'ENTIRE GUEST SUITE', 'ENTIRE GUESTHOUSE', 'PRIVATE ROOM IN HOUSE', 'ENTIRE HOUSE']
  return types[Math.floor(types.length * Math.random())];
}

const assignPhoto = function(){
  return Math.floor(20 * Math.random() + 1);
}
//Related homes I have to hardcode randomly