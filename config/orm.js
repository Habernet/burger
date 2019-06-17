// Bring in the connection to the DB so our methods can acess it. We will write these methods and then export them.
const connection = require('./connection');

// Methods to write:
// * `selectAll()`
// * `insertOne()`
// * `updateOne()`

let selectAll = () => {
    // read everything from the DB and return it. This is for page load..
    connection.query('SELECT * FROM ?', ['burgers'], (err, data) => {
        if (err) { console.error(err.stack)};
        // console log the data and then return the response
        console.log(data);
    });
};
let insertOne = (burger) => {
    // Insert a new entry into the DB..this will be for when the user types something into the box and hits submit.
    let query = 'INSERT INTO burgers(burger_name, devoured) VALUES (??, ??)'
    connection.query(query, [burger.burger_name, burger.devoured], (err, res) => {
        if (err) {console.error(err.stack)};
        // console log the data and then return the response
        console.log(res);
    });
};
let updateOne = (burger) => {
    let query = `UPDATE burgers SET devoured = ?? WHERE id = ??`;
    connection.query(query, [burger.devoured, burger.id], (err, res) => {
        if (err) {console.error(err.stack)};
        // console log the response and then return it
        console.log(res);
    });

};