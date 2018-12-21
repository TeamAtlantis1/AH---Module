const express = require('express');
const bodyParser = require('body-parser');
const retrieveAll = require('../database/index').retrieveAll;
const retrieveOne = require('../database/index').retrieveOne;


let app = express();
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

//Add functionality below...

app.get('/', (req, res) => {
    res.send(req.params)
})


app.get('/api/homes/:listingId', function (req, res) {
var desiredId = req.params.listingId;
retrieveOne(desiredId)
.then((data) => {
    res.send(data)
})
.catch((err) => {
    res.sendStatus(500)}) 
})

app.get('/reviews', (req, res) => {
console.log('reviews');
retrieveAll()
.then((data) => {
    res.send(data)
})
.catch((err) => {
    res.sendStatus(500)})
});

//////////

let port = 3007;

app.listen(port, function() {
  console.log(`listening on port: ` + port);
});