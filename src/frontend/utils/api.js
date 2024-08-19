import axios from 'axios';

const API_URL = 'http://localhost:5000/api/cards';

export const fetchCards = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch cards:', error);
        throw error;
    }
};

export const createCard = async (cardData) => {
    try {
        const response = await axios.post(API_URL, cardData);
        return response.data;
    } catch (error) {
        console.error('Failed to create card:', error);
        throw error;
    }
};

export const fetchCardByTitle = async (title) => {
    try {
        const response = await axios.get(`/api/cards/${encodeURIComponent(title)}`);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch card by title:', error);
        throw error;
    }
};
