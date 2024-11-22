import React from 'react';

// Footer Component: This component renders the footer at the bottom of the page.
const Footer = () => {
    return (
        // Footer element with custom styling
        <footer
            style={{
                backgroundColor: '#0A3143', // Dark teal background color
                padding: '10px', // Adds padding around the footer
                color: 'white', // Sets the text color to white
                textAlign: 'center', // Centers the text horizontally
            }}
        >
            {/* The copyright text */}
            <p>&copy; 2024 © TMDbCatalogue</p>
        </footer>
    );
};

export default Footer;
