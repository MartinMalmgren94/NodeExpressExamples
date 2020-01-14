const { getUsers, login } = require("./user.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
//Roles for the routing
//Here I check for token
router.get("/", checkToken, getUsers);
//Here I don't check for token
router.post("/auth", login);

module.exports = router;