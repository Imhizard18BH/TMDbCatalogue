import React, { useState, useEffect } from 'react';
import { getTopRatedMovies } from '../services/api'; // Service to fetch movies data from TMDb API
import SearchBar from '../components/SearchBar';  // Search bar component to filter movies
import MovieCard from '../components/MovieCard';  // Component to display individual movie card
import MovieDetailsModal from './MovieDetailPage';  // Modal component for movie details
import { motion } from 'framer-motion';  // For smooth animations when displaying the movies

function Home() {
    // State variables
    const [movies, setMovies] = useState([]);  // Stores the fetched movies
    const [filteredMovies, setFilteredMovies] = useState([]);  // Stores movies after filtering by search
    const [loading, setLoading] = useState(true);  // Tracks if data is still loading
    const [currentPage, setCurrentPage] = useState(1);  // Tracks current page for pagination
    const itemsPerPage = 10;  // Number of items to display per page
    const [selectedMovie, setSelectedMovie] = useState(null);  // Tracks selected movie for modal

    // Pagination logic: slices the filtered movies based on the current page and items per page
    const paginatedMovies = filteredMovies.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Fetch the top-rated movies from the API when the component is mounted
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const data = await getTopRatedMovies();
                setMovies(data);  // Save the fetched data
                setFilteredMovies(data);  // Set filtered data to the same as the fetched data initially
            } catch (error) {
                console.error('Error fetching movies:', error);
            } finally {
                setLoading(false);  // Set loading to false when data is fetched
            }
        };
        fetchMovies();
    }, []);  // Empty dependency array ensures this runs once when the component mounts

    // Handles the search functionality by filtering movies based on the search query
    const handleSearch = (query) => {
        const lowercasedQuery = query.toLowerCase().trim(); // Converts query to lowercase and removes extra spaces
        const filtered = movies.filter((movie) => 
            movie.title.toLowerCase().includes(lowercasedQuery) ||  // Check if title includes the query
            (movie.overview && movie.overview.toLowerCase().includes(lowercasedQuery))  // Check if overview includes the query
        );
        setFilteredMovies(filtered);  // Update filteredMovies state with the results
        setCurrentPage(1);  // Reset to the first page of results when a new search is performed
    };

    // Function to close the movie details modal
    const closeModal = () => {
        setSelectedMovie(null);
    };

    // Function to handle when a movie is clicked, opening the movie details modal
    const handleMovieClick = (movie) => {
        console.log(movie);  // For debugging, logs the selected movie
        setSelectedMovie(movie);  // Set the clicked movie as the selected movie for the modal
    };

    // If data is still loading, show a loading message
    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <div className="flex justify-between items-center px-4">
                <h1 className="text-2xl font-bold text-gray-500">Top Rated Movies</h1>
                <SearchBar onSearch={handleSearch} /> {/* Search bar to filter movies */}
            </div>
            
            {/* Movie list with animations */}
            <div className="flex flex-wrap justify-center">
                {paginatedMovies.map((movie) => (
                    <motion.div
                        key={movie.id}  // Movie card unique key
                        initial={{ opacity: 0 }}  // Initial state for the animation (invisible)
                        animate={{ opacity: 1 }}  // Final state for the animation (visible)
                        transition={{ duration: 0.5 }}  // Transition duration
                    >
                        <MovieCard 
                            movie={movie} 
                            onClick={() => handleMovieClick(movie)} // Pass click handler to MovieCard
                        />
                    </motion.div>
                ))}
            </div>

            {/* Pagination controls */}
            <div className="flex justify-center mt-4">
                <button
                    disabled={currentPage === 1}  // Disable the button if on the first page
                    onClick={() => setCurrentPage((prev) => prev - 1)}  // Go to previous page
                    className="px-1.5 py-1 mx-2 bg-[#5673A5] text-white rounded disabled:opacity-40"
                >
                    Previous
                </button>
                <button
                    disabled={currentPage * itemsPerPage >= filteredMovies.length}  // Disable the button if on the last page
                    onClick={() => setCurrentPage((prev) => prev + 1)}  // Go to next page
                    className="px-1.5 py-1 mx-2 bg-[#5673A5] text-white rounded disabled:opacity-40"
                >
                    Next
                </button>
            </div>

            {/* Movie Details Modal */}
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
