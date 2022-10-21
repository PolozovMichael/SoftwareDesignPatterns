const mongoose = require('mongoose');

const connectToDB = () => {
    mongoose.connect('mongodb://localhost:27017/SoftwareDesignPatterns')
    .then(() => {console.log('Succesfully connected to MongoDB!')})
    .catch((err) => {console.log(err)});
}

module.exports = connectToDB;