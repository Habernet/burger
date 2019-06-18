// Bring in express so we can make our router
const express = require('express');
// Bring in burger.js so we can access our model and use our DB 
const burger = require('../models/burger');

// Create our router and then create our routes
let router = express.Router();

// root route
router.get('/', (res) => {
    // use handlebars to serve up the index.html
    // This will use the burger model to get all burgers from the DB and then the front end will place them in their appropriate locations
    burger.all((data) => {
        let hbsNeedsObject = {
            burgers: data
        };
        // See what the object looks like so we can send it to HBS to render onto the page.
        console.log(hbsNeedsObject);
        res.render('index', hbsNeedsObject);
    });
});

// api post
router.post('/api/burgers', (req, res) => {
    // This will be the end point that will be hit when the user adds a new burger.
    // Capture the burger in order to update the DB with it.
    let burgerToAdd = req.body;
    burger.insertOne(burgerToAdd, (result) => {
        res.redirect('/');
    });
});

// api put
router.put('/api/burgers/:id', (req, res) => {
    //This will be the end point that will be hit when the user eats a burger. We will be using the burger model to update the DB and change the burger to devoured.

    // Capture the burger they are looking to update. This will be sent to use via frontside JS, using data-id and event listeners//ajax calls.
    let burgerID = req.params.id;
    // Use this ID to update the DB, changing the devoured status to true. Because we will never undevour a burger, this is all the functionality we need here.
    burger.updateOne(burgerID, (result) => {
        // we now have the response
        console.log(result);
        // Check to see if the response contained changedRows...this means it was successful in updating the DB
        if (result.changedRows == 0) {
            console.log('ID not found! 404');
            return res.status(404).end();
        } else {
            res.redirect('/');
        };
    });
});

// catch all...route to root route
router.get('*', (res) => {
    // redirects to index.html
    res.redirect('/');
});

module.exports = router;