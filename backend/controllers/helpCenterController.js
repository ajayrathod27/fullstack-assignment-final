const Card = require('../models/Card');

const createCard = async (req, res) => {
    try {
        const { title, description } = req.body;

        const newCard = new Card({
            title,
            description
        });
        await newCard.save();
        res.status(201).json(newCard);
    } catch (error) {
        console.error("Error creating card:", error);
        res.status(500).json({ message: 'Failed to create card', error: error.message });
    }
};

module.exports = { createCard };
