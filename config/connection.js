let mysql = require('mysql');


// Create the configuration parameters
// Might change when hosting this on heroku!
let connection = mysql.createConnection({
    host: "us-cdbr-iron-east-02.cleardb.net",
    port: heroku_ad89e85ffcdc858,
    user: 'b9efb7a0529004',
    password: '774c7f6e',
    database: 'burgers_db'
})

//Make the connection
connection.connect((err) => {
    if (err) {
        console.log("Error connecting: " + err.stack);
    };
    console.log("Connected as ID: " + connection.threadId);
});

//Export the connection object for use with the ORM
module.exports = connection;

// mysql -h us-cdbr-iron-east-02.cleardb.net -u b9efb7a0529004 -p heroku_ad89e85ffcdc858 < schema.sql