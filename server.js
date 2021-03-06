const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');

// Serve static files
app.use(express.static(__dirname + '/dist/administratorapp'));

// Send all requests to index.html
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/administratorapp/index.html'));
});

// default Heroku port
app.listen(process.env.PORT || 5000);

app.use(cors());