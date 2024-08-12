const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the directory containing server.js


app.listen(3000, function () {
    console.log('App listening on port 3000');
});
