import { useState, useEffect } from 'react';
import * as trendMoviedbAPI from '../services/moviedbAPI';



export default function HomePage() {
    const [movies, setMovies] = useState();
    useEffect(() => {
        trendMoviedbAPI.trendMoviedbAPI().then(setMovies);
    }, []
    );


    return (
        <>
            <div>Главная страница HomePage</div>
        </>
    )
};