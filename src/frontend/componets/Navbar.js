import React from 'react';

const Navbar = ({ onShowAddCardButton }) => {
    const handleButtonClick = () => {
        onShowAddCardButton();
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#000000' }}>
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="http://futureskills.ai/">Abstract | Help Center</a>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarContent" 
                        aria-controls="navbarContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                        style={{ borderColor: 'white' }}
                    >
                        <span className="navbar-toggler-icon" style={{ color: 'white' }}></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <button
                                    className="btn btn-outline-light"
                                    onClick={handleButtonClick}
                                >
                                    Submit a Request
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;

