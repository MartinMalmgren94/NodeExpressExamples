const express = require('express');
var morgan = require('morgan');
const app = express();
const usersRouter = require("./api/users/user.router");
const port = 3000;

//setting the api to json
app.use(express.json());
//setting on morgon for debugging
app.use(morgan("tiny"));
//adding the users router
app.use("/users", usersRouter);


//setting up the api on port (3000)
app.listen(port, () => console.log(`Listening on port ${port}!`))