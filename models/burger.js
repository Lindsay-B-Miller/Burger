var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burger_name", "burgers", function (res) {
            cb(res);
        })
    },

    insertOne: function (col, val, cb) {
        orm.insertOne("burgers", col, val, function (res) {
            cb(res);
        })
    }

}

module.exports = burger;