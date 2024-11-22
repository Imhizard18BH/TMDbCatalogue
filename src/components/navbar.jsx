import React from 'react';

const Navbar = () => {
    return (
        <nav style={{ backgroundColor: '#276E90', padding: '10px', color: 'white' }}>
            <ul style={{ display: 'flex', justifyContent: 'space-around', listStyleType: 'none', margin: 0, padding: 0 }}>
                <li><a href="#" style={{ color: 'white' }}>TMDbCatalogue</a></li>
                <li><a href="#" style={{ color: 'white' }}>Home</a></li>
                <li><a href="#" style={{ color: 'white' }}>Movies</a></li>
                <li><a href="#" style={{ color: 'white' }}>Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
