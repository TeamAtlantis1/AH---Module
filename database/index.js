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
  room_type: String,
  Privacy: String,
  Price: Number,
  Review_count: Number,
  Average_rating: Number,
  Related_homes: [Number]
});

let Repo = mongoose.model('Repo', listingSchema);