import { useState, useEffect } from 'react';
import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';

import * as moviedbAPI from '../services/moviedbAPI';
import MovieDetails from '../Components/MovieDetails';
import Button from '../Components/Button';
import Cast from './Cast';
import Reviews from './Reviews';


export default function MovieDetailsPage() {
    const {url} = useRouteMatch();
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
            <Link to={{
                pathname: `${url}/cast`,
                state: {
                    from: location,                    
                }
            }}>Cast</Link>
            <br/>
            <Link to={{
                pathname: `${url}/reviews`,
                state: {
                    from: location,
                }
            }}>Reviews</Link>

            <Suspense fallback="waiting...">
                <Switch>
                    <Route exact path="/movies/:movieId/cast">
                        <Cast />
                    </Route>

                    <Route  exact path="/movies/:movieId/reviews">
                        <Reviews />
                    </Route>
                </Switch>
            </Suspense>
        </>
    )
};

{/* <Link to={`${url}/cast`}>Cast</Link>
            <br/>
            <Link to={`${url}/reviews`}>Reviews</Link> */}