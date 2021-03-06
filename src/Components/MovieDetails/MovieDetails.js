import PropTypes from 'prop-types';

const imageUrl = 'https://image.tmdb.org/t/p/w200';

export default function MovieDetails({ movie }) {
  return (
      <div>
            <img src={`${imageUrl}${movie.poster_path}`} alt={movie.title} className="image" />
            <h2>{movie.title}</h2>
             <p>User Score: {movie.vote_average}  </p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h2>Genres</h2>
             <ul>{movie.genres.map(genr => <li key={genr.id}>{genr.name}</li>)}</ul>
        </div>
    )   
};

MovieDetails.propTypes = {
  movie: PropTypes.object,
};

