let express = require('express');

let app = express();
let PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Allow for serving of static files: CSS, JS, etc
app.use(express.static('./public'));

//routes
require('./controllers/burgers_controllers')(app);

//Kick off our server
app.listen(PORT, () => {
    console.log('App listening on port: ' + PORT);
});

