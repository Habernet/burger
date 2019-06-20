// Dependencies
let express = require('express');
let exphbs = require('express-handlebars');


let app = express();
let PORT = process.env.PORT || 8080;

// Allow for serving of static files: CSS, JS, etc
app.use(express.static('public'));



// Set handlebars as the view engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//routes
app.use(require('./controllers/burgers_controllers'));

//Kick off our server
app.listen(PORT, () => {
    console.log('App listening on port: ' + PORT);
});

