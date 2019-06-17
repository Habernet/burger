
//   * In `models`, make a `burger.js` file.

//   * Inside `burger.js`, import `orm.js` into `burger.js`

//   * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

//   * Export at the end of the `burger.js` file.

const orm = require('../config/orm');

let burger = {
    //burger object (model) has an all method that uses the orm.selectAll method, passes it a burger condition (for the table), and uses a callback to send the response.
    all: (cb) => {
        orm.selectAll('burgers', (res) => {
            cb(res);
        });
    },
    // burger model has an insertOne method that uses the orm.insertOne method, passes it  burger_name and devoured args, and uses a callback to send the response.
    insertOne:  (burger, cb) => {
        orm.insertOne(burger, (res) => {
            cb(res);
        });
    },
    updateOne: (burger, cb) => {
        cb(res);
    }
};

module.exports = burger;