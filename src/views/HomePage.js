import { useState, useEffect } from 'react';
import { Link  } from 'react-router-dom';
import * as moviedbAPI from '../services/moviedbAPI';



export default function HomePage() {
    // const math = useRouteMatch();
    // console.log(math);
    const [movies, setMovies] = useState(null);
    useEffect(() => {
        moviedbAPI.trendMoviedbAPI().then(r=>setMovies(r.results));       
    }, []
    );
    
    return (
        <>
            <div>Trending today....</div>
            <ul>
                {movies && movies.map(movie =>
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                    </li>)}
            </ul>
        </>
    )
};

// to={`${url}/${movie.id}`