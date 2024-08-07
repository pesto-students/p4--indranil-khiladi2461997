//Express router for response to client request
const express = require('express');
//body parser to process data in middleware for parsing json
const bodyParser = require('body-parser')
const Routes = require('./source/Routes/route.js');
//port for server
const port = 3000;

const app = express();
// mounting body parser with app(express)
app.use(bodyParser.json())
//encoding url with querystring library by falsing the extended
app.use(bodyParser.urlencoded({ extended: false }))
//bindng routes
app.use('/', Routes);
//attaching listener for port with callback 
app.listen(port, (error) => {
    if (error) throw error
    console.log(`Listening on port ${port}`)
});