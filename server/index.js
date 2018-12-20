const express = require('express');
const bodyParser = require('body-parser');
const retrieve = require('../database/index').retrieve;

let app = express();
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

/*
Add functionality here. . . . . 
*/

app.get('/reviews', (req, res) => {
console.log('reviews');
retrieve()
.then((data) => {
    res.send(data)
})
.catch((err) => {
    res.sendStatus(500)})
});

let port = 3007;

app.listen(port, function() {
  console.log(`listening on port: ` + port);
});