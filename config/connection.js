let mysql = require('mysql');


// Create the configuration parameters

// If the DB is on Heroku, use the URL to connect, otherwise it's on local host.

let connection;

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'SQLmeajob1',
        database: 'burgers_db'
    });
};


//Make the connection
connection.connect((err) => {
    if (err) {
        console.log("Error connecting: " + err.stack);
    };
    console.log("Connected as ID: " + connection.threadId);
});

//Export the connection object for use with the ORM
module.exports = connection;