import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router';
import { lazy, Suspense } from 'react';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import * as moviedbAPI from '../services/moviedbAPI';
import MovieDetails from '../Components/MovieDetails';
import Button from '../Components/Button';

const Cast = lazy(() => import('./Cast' /* webpackChunkName:"Cast" */));
const Reviews = lazy(() => import('./Reviews' /* webpackChunkName:"Reviews" */));


export default function MovieDetailsPage() {
    const { url } = useRouteMatch();
    const { movieId } = useParams();
    const history = useHistory();
    const location = useLocation();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        moviedbAPI.detailsMoviedbAPI(movieId).then(r => setMovie(r));
    }, [movieId]
    );

    const handleClick = () => {
        history.push(location?.state?.from ?? '/');        
    };

    return (
        <>            
            <Button onClick={handleClick}/>
            {movie && <MovieDetails movie={movie} />}
            <h2>Additional information</h2>
            <div>
                <Link to={{
                    pathname:`${url}/cast`,
                    state: {
                        from: location,
                    }
                }}>
                    <p>Cast</p>
                </Link>
                
                <Link to={{
                    pathname:`${url}/reviews`,
                    state: {
                        from: location,
                    }
                }}>
                    <p>Reviews</p>
                </Link>
            </div>

            <Suspense fallback="waiting...">
                <Switch>
                    <Route path={`/movies/:movieId/cast`}>
                        <Cast />
                    </Route>

                    <Route path="/movies/:movieId/reviews">
                        <Reviews />
                    </Route>
                </Switch>
            </Suspense>
        </>
    )
};
