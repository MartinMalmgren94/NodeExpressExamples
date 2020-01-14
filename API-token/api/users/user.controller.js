const { 
    getUsers, 
    getUserByEmail 

} = require("./user.service");

const { compare } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
    //Getting all users GET /users
    getUsers: (req, res) => {
        getUsers((err, result) => {
            if(err){
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: result
            })
        });
    },
    //The login function POST/users/auth
    login: (req, res) => {
        const body = req.body;
        getUserByEmail(body.email, (err, results) => {
            if(err){
                console.log(err);
            }
            if(!results){
                return res.json({
                    success: 0,
                    data: "Invalid email or password"
                });
            }
            const result = compare(body.password, results[0].password);
            console.log(results[0].password + " " + body.password)
            console.log(results[0].password == body.password)
            console.log(result)
            if(result){
                result.password = undefined;
                const jsontoken = sign({result: results}, "qwe1234", {
                    expiresIn: "336h"
                });
                return res.json({
                    success: 1,
                    message: "Login successfully",
                    token: jsontoken,
                    expiresIn: "1209600"
                });
            }
            else {
                return res.json({
                    success: 0,
                    message: "Invalid email or password"
                });
            }
        });

    }
};