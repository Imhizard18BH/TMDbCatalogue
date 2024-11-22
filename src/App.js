import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetailPage from './pages/MovieDetailPage';
import React from 'react';
import Navbar from './components/navbar'; // Asegúrate de que la ruta sea correcta
import Footer from './components/footer';

function App() {
    return (
        <div>
        <Navbar />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<MovieDetailPage />} />
            </Routes>
        </BrowserRouter>
        <Footer />
        </div>
    );
}

export default App;
