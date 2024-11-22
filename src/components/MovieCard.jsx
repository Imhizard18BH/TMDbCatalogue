import { Link } from 'react-router-dom';  // Importing Link component for navigation (though not used in this version)
import { AiFillStar } from 'react-icons/ai';  // Importing the star icon from react-icons for rating display
import React from 'react';

function MovieCard({ movie, onClick }) {
    return (
        // Main container for the movie card with background, shadow, and rounded corners
        <div className="bg-[#5673A5] shadow-lg rounded-lg overflow-hidden m-4 w-60" onClick={onClick}>
            {/* Movie Poster */}
            <img
                className="w-full" // Ensures the image takes up the full width of the container
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} // Image URL fetched from TMDb with a fixed size (200px)
                alt={movie.title} // Alt text for accessibility
            />
            <div className="p-4"> {/* Padding inside the card */}
                {/* Movie Title */}
                <h3 className="text-lg font-semibold text-white">{movie.title}</h3>
                {/* Movie Rating with star icon */}
                <p className="flex items-center text-white">
                    <AiFillStar className="text-yellow-500 mr-1" /> {/* Star icon with a yellow color */}
                    {movie.vote_average} {/* Displaying the average rating */}
                </p>
            </div>
        </div>
    );
}

export default MovieCard;
