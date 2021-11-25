import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as moviedbAPI from '../services/moviedbAPI';

export default function Reviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        moviedbAPI.reviewsMoviedbAPI(movieId).then(r => setReviews(r.results));
    }, [movieId]
    );

     return (
        <>
              <ul>
                {reviews && reviews.length !== 0
                    ? reviews.map(review =>
                    <li key={review.id}>
                        <h2>{review.author}</h2>
                        <p>{review.content}</p>
                        </li>)
                    : <p>We don`t have any reviews for this movie.</p>}
            </ul>
        </>     
    )
};