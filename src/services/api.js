import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const getTopRatedMovies = async () => {
    const response = await axios.get(`${API_URL}/movie/top_rated`, {
        params: { api_key: API_KEY }
    });
    return response.data.results;
};

export const getMovieDetails = async (id) => {
    const response = await axios.get(`${API_URL}/movie/${id}`, {
        params: { api_key: API_KEY }
    });
    return response.data;
};
