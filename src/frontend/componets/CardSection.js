import React, { useEffect, useState } from 'react';
import { fetchCards } from '../utils/api';
import CardForm from './CardForm';
import Navbar from './Navbar';
import SearchBar from './SearchBar';

const CardSection = () => {
    const [cards, setCards] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [showAddCardButton, setShowAddCardButton] = useState(false);
    // eslint-disable-next-line
    const [searchedCard, setSearchedCard] = useState(null);

    useEffect(() => {
        const getCards = async () => {
            try {
                const fetchedCards = await fetchCards();
                setCards(fetchedCards);
            } catch (error) {
                console.error('Failed to fetch cards:', error);
            }
        };
        getCards();
    }, []);

    const addCardToUI = (newCard) => {
        setCards((prevCards) => [...prevCards, newCard]);
        setShowForm(false);
    };

    const handleShowAddCardButton = () => {
        setShowAddCardButton(true);
    };
    const handleSearchResult = (card) => {
        setSearchedCard(card);
      };

    return (
        <div>
            <Navbar onShowAddCardButton={handleShowAddCardButton} />
            <SearchBar onSearchResult={handleSearchResult} />
            {showAddCardButton && (
                <div className="text-center mt-3">
                    <button
                        className="btn btn-dark"
                        onClick={() => setShowForm(true)}
                    >
                        Add New Card
                    </button>
                </div>
            )}
            {showForm && <CardForm addCardToUI={addCardToUI} />}
            <div className="d-flex flex-wrap justify-content-center g-4 mt-5 mb-5">
                {cards.map((card) => (
                    <div className="p-4" key={card.id} style={{ width: '34%' }}>
                        <div className="card border-1 rounded-3 shadow-sm bg-light h-100">
                            <div className="card-body">
                                <h5 className="card-title fw-bold">{card.title}</h5>
                                <p className="card-text ">{card.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardSection;

