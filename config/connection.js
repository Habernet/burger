let mysql = require('mysql');


// Create the configuration parameters
// Might change when hosting this on heroku!
let connection = mysql.createConnection({
    host: "pwcspfbyl73eccbn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: 'mmeknf8wkm51mevf',
    password: '774c7f6e',
    database: 'k807ms7rpuyu2tt2'
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