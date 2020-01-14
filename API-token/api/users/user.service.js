const pool = require("../../config/database");

module.exports = {
    //Call to db for all users using in user.controller.js
    getUsers: callback => {
        pool.query("SELECT * FROM users", [], (error, results, fields) => {
            if(error){
                return callback(error);
            }
            return callback(null, results);
        });
    },
    //Call for check for a email in db using in user.controller.js
    getUserByEmail: (email, callback) =>{
        pool.query("SELECT * FROM users WHERE email = ?", [email], (error, results, fields) => {
            if(error){
                callback(error)
            }
            return callback(null, results)
        })
    }
};