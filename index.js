const express = require('express'); // this package returns a function using which we can initiate a new express application object
const apiRouter = require("./src/routes/index");
const User = require('./src/models/user');
const {connect} = require('./src/config/database');

const app = express(); // executing the function returned a new express application

app.use("/api", apiRouter);

app.get('/', (req, res) => {
    res.status(200);
    res.send({
        success: true,
        message: "Succesfully hitting the api",
        data: {}
    });
});

app.listen(3000, async () => {
    // this callback will be executed everytime the server starts
    await connect();
    console.log("Mongo db connected successfully");
    console.log("Server Started Successsfully");
    // let user = await User.create({
    //     email: "abc@xyz.com", 
    //     password: 12345,
    //     username: "ABC"
    // });
    // console.log(user);
});

