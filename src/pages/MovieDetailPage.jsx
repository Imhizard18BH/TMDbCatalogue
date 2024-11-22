import React from 'react';
import { motion } from 'framer-motion';

const MovieDetailsModal = ({ movie, closeModal }) => {
  if (!movie) return null;

  // Asegurémonos de que los datos estén presentes antes de mostrarlos
  const {
    title,
    poster_path,
    overview = 'No description available',  // Cambiado description por overview
    vote_average = 'No rating available',  // Cambiado rating por vote_average
    release_date = 'No release date available',
  } = movie;

  return (
    <motion.div
      className="modal-overlay"
      onClick={closeModal}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      style={{ zIndex: 1000 }}
      onClick={closeModal}
    >
      <div
        className="bg-[#4A7BCF] p-6 rounded-lg shadow-lg w-[80%] sm:w-[60%] md:w-[50%] relative"
        style={{
          color: '#fff',
          borderRadius: '10px',
          backgroundColor: '#5673A5', // Color de fondo
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
            className="w-32 h-48 object-cover mr-6 rounded-md"
          />
          <div className="flex-grow">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="text-sm text-gray-300">{release_date}</p>
          </div>
          <button
            className="absolute top-2 right-2 bg-red-500 text-white px-4 py-2 rounded-full"
            onClick={closeModal}
          >
            X
          </button>
        </div>
        <div className="mt-4">
          <p><strong>Overview:</strong> {overview}</p>
          <p><strong>Rating:</strong> {vote_average}</p>
        </div>
      </div>
    </div>
    </motion.div>
    </motion.div>
  );
};

export default MovieDetailsModal;
