import { useState, useEffect } from 'react';
import { Link  } from 'react-router-dom';
import Loader from "react-loader-spinner";
import { useHistory, useLocation } from 'react-router';

import * as moviedbAPI from '../services/moviedbAPI';
import Searchbar from '../Components/Searchbar/Searchbar';

export default function MoviesPage() {

    const location = useLocation();
    const history = useHistory();
    const [movies, setMovies] = useState([]);    //массив
    const [name, setName] = useState('');
    const [status, setStatus] = useState('init');

    useEffect(() => {
        if (window.localStorage.getItem('movies')) {
            setStatus('success');
            setMovies(JSON.parse(window.localStorage.getItem('movies'))) //записала массив
        }
    }, []
    );
    
    useEffect(() => {
        if (!name) {
            return;
        };

        setStatus('pending');
        moviedbAPI.searchMoviedbAPI(name).then(r => {
            setMovies(r.results);
            localStorage.setItem('movies', JSON.stringify(r.results));
            setStatus('success');
            if (r.results.length === 0) {
                return setStatus('error')
            }
        })
    }, [name]
    );
    
    const handleFormSubmit = name => {
        setName(name);
        history.push({...location, search:`query=${name}`})       
  };

    return ( 
        <>
            <Searchbar onSubmit={handleFormSubmit} />
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
                        <Link to={{
                            pathname:`/movies/${movie.id}`,
                            state: {
                                from: location,                                
                            }
                        }}>{movie.title}</Link>
                    </li>)}
                </ul>}
            {status === 'error' && <h2>No results...</h2>}
        </>
    )
};
