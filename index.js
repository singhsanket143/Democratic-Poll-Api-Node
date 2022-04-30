const express = require('express'); // this package returns a function using which we can initiate a new express application object
const bodyParser = require('body-parser');
const passport = require('passport');

const apiRouter = require("./src/routes/index");
const authRouter = require('./src/routes/authRoutes');
const User = require('./src/models/user');
const {connect} = require('./src/config/database');
require('./src/util/auth');
const app = express(); // executing the function returned a new express application

app.use(bodyParser.urlencoded({extended: false}))
app.use("/", authRouter);
app.use("/api", passport.authenticate('jwt', {session: false}), apiRouter);

// app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.json({
//         success: false,
//         error: err
//     });
// });

app.listen(3000, async () => {
    // this callback will be executed everytime the server starts
    await connect();
    console.log("Mongo db connected successfully");
    console.log("Server Started Successsfully");
});

