import React, { useState } from 'react';
import { createCard } from '../utils/api';

const CardForm = ({ addCardToUI }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
    e.preventDefault();
    
    const tempCard = { id: Date.now(), title, description };
    addCardToUI(tempCard);

    // Clear the form
    setTitle('');
    setDescription('');
    setError('');

    try {
        const newCard = await createCard({ title, description });
        console.log('Card created:', newCard);
    } catch (error) {
        console.error('Failed to create card:', error);
        setError('Failed to create card');
    }
};

    return (
        <div className="">
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea
                    className="form-control"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                ></textarea>
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            <button type="submit" className="btn btn-dark mb-3">Submit a Request</button>
        </form>
        </div>
    );
};

export default CardForm;
