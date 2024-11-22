import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import React from 'react';

function MovieCard({ movie, onClick }) {
    return (
        <div className="bg-[#5673A5] shadow-lg rounded-lg overflow-hidden m-4 w-60" onClick={onClick}>
        <img
            className="w-full"
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
        />
        <div className="p-4">
            <h3 className="text-lg font-semibold text-white">{movie.title}</h3>
            <p className="flex items-center text-white">
            <AiFillStar className="text-yellow-500 mr-1" />
             {movie.vote_average}
            </p>
        </div>
    </div>
    );
}

export default MovieCard;
