// Bring in the connection to the DB so our methods can acess it. We will write these methods and then export them.
const connection = require('./connection');

// Methods to write:
// * `selectAll()`
// * `insertOne()`
// * `updateOne()`

let selectAll = (table, cb) => {
    // read everything from the DB and return it. This is for page load..
    connection.query('SELECT * FROM ?', [table], (err, data) => {
        if (err) { console.error(err.stack)};
        // console log the data and then return the response to the callback
        console.log(data);
        cb(data);
    });
};
let insertOne = (entry, cb) => {
    // Insert a new entry into the DB..this will be for when the user types something into the box and hits submit.
    let query = 'INSERT INTO burgers(burger_name, devoured) VALUES (??, ??)'
    connection.query(query, [entry.burger_name, entry.devoured], (err, res) => {
        if (err) {console.error(err.stack)};
        // console log the data and then return the response
        console.log(res);
        cb(res);
    });
};
let updateOne = (entryToUpdate, cb) => {
    let query = `UPDATE burgers SET devoured = ?? WHERE id = ??`;
    connection.query(query, ['true', entryToUpdate.id], (err, res) => {
        if (err) {console.error(err.stack)};
        // console log the response and then return it
        console.log(res);
        cb(res);
    });
};

module.exports = {
    selectAll = selectAll,
    insertOne = insertOne,
    updateOne = updateOne
};