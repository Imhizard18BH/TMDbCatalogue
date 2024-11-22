import React, { useState, useEffect } from 'react';
import { getTopRatedMovies } from '../services/api'; 
import SearchBar from '../components/SearchBar'; 
import MovieCard from '../components/MovieCard'; 
import MovieDetailsModal from './MovieDetailPage'; 
import { motion } from 'framer-motion';

function Home() {
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const [selectedMovie, setSelectedMovie] = useState(null);


    const paginatedMovies = filteredMovies.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const data = await getTopRatedMovies();
                setMovies(data);
                setFilteredMovies(data);
            } catch (error) {
                console.error('Error fetching movies:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchMovies();
    }, []);

    const handleSearch = (query) => {
        const lowercasedQuery = query.toLowerCase().trim(); 
        const filtered = movies.filter((movie) => 
          movie.title.toLowerCase().includes(lowercasedQuery) || 
          (movie.overview && movie.overview.toLowerCase().includes(lowercasedQuery)) 
        );
        setFilteredMovies(filtered);
        setCurrentPage(1);
      };      

    const closeModal = () => {
        setSelectedMovie(null);
    };

    const handleMovieClick = (movie) => {
        console.log(movie);
        setSelectedMovie(movie);
    };

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <div className="flex justify-between items-center px-4">
                <h1 className="text-2xl font-bold text-gray-500">Top Rated Movies</h1>
                <SearchBar onSearch={handleSearch} />
            </div>
            
            {/* Lista de películas */}
            <div className="flex flex-wrap justify-center">
                {paginatedMovies.map((movie) => (
                    <MovieCard 
                        key={movie.id} 
                        movie={movie} 
                        onClick={() => handleMovieClick(movie)} // Maneja el click
                    />
                ))}
            </div>

            {/* Controles de Paginación */}
            <div className="flex justify-center mt-4">
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                    className="px-1.5 py-1 mx-2 bg-[#5673A5] text-white rounded disabled:opacity-40"
                >
                    Previous
                </button>
                <button
                    disabled={currentPage * itemsPerPage >= filteredMovies.length}
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    className="px-1.5 py-1 mx-2 bg-[#5673A5] text-white rounded disabled:opacity-40"
                >
                    Next
                </button>
            </div>

            {}
            {selectedMovie && (
                <MovieDetailsModal 
                    movie={selectedMovie} 
                    closeModal={closeModal} 
                />
            )}
        </div>
    );
}

export default Home;
