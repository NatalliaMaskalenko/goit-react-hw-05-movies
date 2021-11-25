import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as moviedbAPI from '../services/moviedbAPI';

const imageUrl = 'https://image.tmdb.org/t/p/w200';

export default function Cast() {
    const { movieId } = useParams();
    const [actors, setActors] = useState(null);
   
    
    useEffect(() => {
        moviedbAPI.actorsMoviedbAPI(movieId).then(r => setActors(r.cast));
    }, [movieId]
    );

    console.log(actors);

    return (
        <>
           <ul>
                {actors && actors.map((actor) =>
                { const imagePoster = actor.profile_path ? `${imageUrl}${actor.profile_path}`: 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png';
                    
                    return ( <li key={actor.id}>
                        <img src={imagePoster} alt={actor} className="image" />
                        <p>{actor.name}</p>
                        <p>Character: {actor.character}</p>
                    </li>)})}
            </ul>
        </>
    )
};