import { useState, useEffect } from 'react';
import { useParams  } from 'react-router-dom';
import * as moviedbAPI from '../services/moviedbAPI';
import MovieDetails from '../Components/MovieDetails'

export default function MovieDetailsPage() {
    const {movieId} = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        moviedbAPI.detailsMoviedbAPI(movieId).then(r => setMovie(r));
    }, [movieId]
    );

    console.log(movie);

    return (
        <>
            {movie && <MovieDetails movie={movie}/>}
        </>
    )
};