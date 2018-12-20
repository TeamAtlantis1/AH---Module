const express = require('express');
const bodyParser = require('body-parser');

let app = express();
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

/*
Add functionality here. . . . . 
*/

let port = 3007;

app.listen(port, function() {
  console.log(`listening on port: ` + port);
});