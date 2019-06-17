let mysql = require('mysql');


// Create the configuration parameters
// Might change when hosting this on heroku!
let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: 'root',
    password: 'SQLmeajob1',
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