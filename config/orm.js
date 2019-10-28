var connection = require("./connection.js");

// Object for all the SQL statement functions
var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (table, col, val, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, col, val, cb], function (err, result) {
            console.log(queryString)
            if (err) throw err;
            cb(result)
        });
    },
    update: function (table, val, condition, cb) {
        var queryString = "UPDATE ?? SET devoured = ? WHERE id = ?";
        // console.log(val + "right here!!!!")
        connection.query(queryString, [table, val, condition, cb], function (err, result) {
            console.log(queryString)
            if (err) throw err;
            cb(result);
        })
    }
}

// Export the orm object for the model (burger.js).
module.exports = orm;