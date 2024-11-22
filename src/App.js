import { BrowserRouter, Routes, Route } from 'react-router-dom';  // Importing routing components
import Home from './pages/Home';  // Home page where top rated movies are displayed
import MovieDetailPage from './pages/MovieDetailPage';  // Movie details page for individual movie info
import React from 'react';
import Navbar from './components/navbar';  // Navbar component for navigation
import Footer from './components/footer';  // Footer component for additional info

function App() {
    return (
        <BrowserRouter>  {/* Wrapping the whole routing structure within BrowserRouter */}
            <div>
                {/* Navbar is shown at the top, accessible on all pages */}
                <Navbar />
                
                {/* The Routes define the navigation paths in the app */}
                <Routes>
                    {/* Home route for the landing page */}
                    <Route path="/" element={<Home />} />
                    
                    {/* Dynamic route for movie details using movie id */}
                    <Route path="/movie/:id" element={<MovieDetailPage />} />
                </Routes>
                
                {/* Footer is displayed at the bottom */}
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
