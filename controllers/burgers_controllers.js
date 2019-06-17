// Bring in express so we can make our router
const express = require('express');
// Bring in burger.js so we can access our model and use our DB 
const burger = require('../models/burger');

// Create our router and then create our routes
let router = express.Router();

// root route
router.get('/', (req, res) => {
    // use handlebars to serve up the index.html
    // This will use the burger model to get all burgers from the DB and then the front end will place them in their appropriate locations

});

// api post
router.post('/api/burgers', (req, res) => {
    // This will be the end point that will be hit when the user adds a new burger.
    // The front end JS will send post request here with a burger object.
    // We will then use the burger model to update the DB
});

// api put
router.put('/api/burgers/:id', (req, res) => {
    //This will be the end point that will be hit when the user eats a burger. We will be using the burger model to update the DB and change the burger to devoured.
});

// catch all...route to root route
router.get('*', (req, res) => {
    // redirects to index.html
});