import React from 'react';

const SearchBar = () => {
  return (
    <div className="search-bar-container" style={styles.container}>
      <h1 style={styles.heading}>How can we help?</h1>
      <div className="input-group" style={styles.inputGroup}>
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-button"
          style={styles.input}
        />
        <button className="btn btn-outline-secondary" type="button" id="search-button" style={styles.button}>
          →
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#d8d9eb', 
    padding: '50px 0',
    textAlign: 'center',
  },
  heading: {
    marginBottom: '20px',
    marginTop:'40px',
    fontSize: '3rem',
    color: '#000', 
  },
  inputGroup: {
    display: 'inline-flex',
    width: '40%',
    maxWidth: '600px',
    marginBottom: '40px',
    marginTop:'10px',
  },
  input: {
    borderTopLeftRadius: '5px',
    borderBottomLeftRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '8px 0',
  },
  button: {
    paddingLeft: '20px',
    paddingRight: '20px',
    backgroundColor: '#ffffff', 
  },
};

export default SearchBar;

