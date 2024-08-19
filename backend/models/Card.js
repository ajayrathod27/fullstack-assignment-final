const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    id: {
        type: String,
        unique: true,
        default: function() {
            return new mongoose.Types.ObjectId().toString();
        }
    }
});

const Card = mongoose.model('Card', cardSchema);
module.exports = Card;
