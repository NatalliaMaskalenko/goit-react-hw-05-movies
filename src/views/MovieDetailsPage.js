import { useState, useEffect } from 'react';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import * as moviedbAPI from '../services/moviedbAPI';
import MovieDetails from '../Components/MovieDetails';


export default function MovieDetailsPage() {
    const {url} = useRouteMatch();
    const {movieId} = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        moviedbAPI.detailsMoviedbAPI(movieId).then(r => setMovie(r));
    }, [movieId]
    );

    return (
        <>
            {movie && <MovieDetails movie={movie} />}
            <h2>Additional information</h2>
            <p><Link to={`${url}/cast`}>Cast</Link></p>
            <p><Link to={`${url}/reviews`}>Reviews</Link></p>

        </>
    )
};