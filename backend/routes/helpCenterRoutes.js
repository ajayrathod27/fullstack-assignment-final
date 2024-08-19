const express = require('express');
const router = express.Router();
const Card = require('../models/Card');

// POST /api/cards - Create a new card
router.post('/', async (req, res) => {
    try {
        const { title, description } = req.body;
        const newCard = new Card({ title, description });
        await newCard.save();
        res.status(201).json(newCard);
    } catch (error) {
        console.error('Error creating card:', error);
        if (error.code === 11000) {
            res.status(400).json({ error: 'Duplicate card id' });
        } else {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
});

// GET /api/cards - Fetch all cards
router.get('/', async (req, res) => {
    try {
        const cards = await Card.find();
        res.status(200).json(cards);
    } catch (error) {
        console.error('Error fetching cards:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// 3
router.get('/cards/:title', async (req, res) => {
    try {
        const cardTitle = req.params.title;
        const card = await Card.findOne({ title: cardTitle.toLowerCase });
        if (!card) {
            return res.status(404).json({ error: 'Card not found' });
        }
        res.status(200).json(card);
    } catch (error) {
        console.error('Error fetching the card:', error);
        res.status(500).json({ error: 'Failed to fetch the card' });
    }
});


module.exports = router;
