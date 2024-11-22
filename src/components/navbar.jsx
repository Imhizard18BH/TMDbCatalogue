import React from 'react';

// Navbar Component: Displays the navigation bar with links to different sections.
const Navbar = () => {
    return (
        // Navbar container with custom styles for background, padding, and text color.
        <nav style={{ backgroundColor: '#276E90', padding: '10px', color: 'white' }}>
            {/* Unordered list for navigation links */}
            <ul style={{ 
                display: 'flex', // Displays the list items in a horizontal row
                justifyContent: 'space-around', // Distributes the list items evenly
                listStyleType: 'none', // Removes the default list bullets
                margin: 0, // Removes any default margin
                padding: 0 // Removes any default padding
            }}>
                {/* TMDbCatalogue link */}
                <li><a href="/" style={{ color: 'white' }}>TMDbCatalogue</a></li>
                {/* Home link */}
                <li><a href="/" style={{ color: 'white' }}>Home</a></li>
                {/* Movies link */}
                <li><a href="/" style={{ color: 'white' }}>Movies</a></li>
                {/* Contact link */}
                <li><a href="/" style={{ color: 'white' }}>Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
