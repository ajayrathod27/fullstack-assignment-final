import React, {useState} from 'react';
import CardSection from './frontend/componets/CardSection';
import Footer from './frontend/componets/Footer';

function App() {
  
  const [searchedCard, setSearchedCard] = useState(null);

    // eslint-disable-next-line
    const handleSearchResult = (card) => {
      setSearchedCard(card);
    };

  return (
    <div className="App">
      <CardSection cards={searchedCard ? [searchedCard] : []} />
      <Footer />
    </div>
  );
}

export default App;
