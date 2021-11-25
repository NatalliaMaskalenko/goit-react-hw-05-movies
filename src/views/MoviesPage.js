import { useState, useEffect } from 'react';
import { Link  } from 'react-router-dom';
import Loader from "react-loader-spinner";

import * as moviedbAPI from '../services/moviedbAPI';
import Searchbar from '../Components/Searchbar/Searchbar';

export default function MoviesPage() {
    const [movies, setMovies] = useState([]);
    const [name, setName] = useState('');
    const [status, setStatus] = useState('init');
    
    useEffect(() => {
        if (!name) {
            return;
        };

        setStatus('pending');
        moviedbAPI.searchMoviedbAPI(name).then(r => {
            setMovies(r.results);
            setStatus('success');
            if (r === 0) {
                return setStatus('error')
            }
        });

    }, [name]
    );
        
    return ( 
        <>
            <Searchbar onSubmit={setName} />
            {status === 'init' && <h1>Hello! Search something....</h1>}
            {status === 'pending' && <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
            />}
            {status === 'success' &&
                <ul>
                {movies && movies.map(movie =>
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                    </li>)}
                </ul>}
        </>
    )
};
