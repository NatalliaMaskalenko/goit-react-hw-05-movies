const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = 'd487c6d6cc7f608fd9f791a1c234621c';

async function fetchWithErrorHandling(url = '', config = {}) {
    const response = await fetch(url, config);
    return response.ok
        ? await response.json()
        : Promise.reject(new Error('Not Found'));
};


export  function trendMoviedbAPI() {
    return fetchWithErrorHandling(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`)
};

export function searchMoviedbAPI(query) {
    return fetchWithErrorHandling(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=1`)
};

export function detailsMoviedbAPI(movie_id) {
    return fetchWithErrorHandling(`${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}`)
};

export function actorsMoviedbAPI(movie_id) {
    return fetchWithErrorHandling(`${BASE_URL}/movie/${movie_id}/credits?api_key=${API_KEY}`)
};

export function reviewsMoviedbAPI(movie_id) {
    return fetchWithErrorHandling(`${BASE_URL}/movie/${movie_id}/reviews?api_key=${API_KEY}`)
};
