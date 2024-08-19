// db.js
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/helpCenter';

const connectToMongo = () => {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Connected to MongoDB successfully');
        })
        .catch((err) => {
            console.error('Error connecting to MongoDB:', err.message);
        });
}

module.exports = connectToMongo;
