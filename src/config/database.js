const mongoose = require('mongoose');

const connect = () => {
    console.log("Mongodb connection requested");
    return mongoose.connect('mongodb://localhost/project');
}

module.exports = {
    connect
}