import { useState, useEffect } from 'react';
import { Link  } from 'react-router-dom';
import * as moviedbAPI from '../services/moviedbAPI';
import {  useLocation } from 'react-router';

export default function HomePage() {
    
    const location = useLocation();
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        moviedbAPI.trendMoviedbAPI().then(r => {
            setMovies(r.results);            
        });
    }, []
    );
    
    return (
        <>
            <div>Trending today....</div>
            <ul>
                {movies && movies.map(movie =>
                    <li key={movie.id}>
                        <Link to={{
                            pathname: `/movies/${movie.id}`,
                            state: {
                                from:location,
                            }
                        }}>{movie.title}</Link>
                    </li>)}
            </ul>
        </>
    )
};

