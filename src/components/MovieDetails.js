import PropTypes from 'prop-types';

export const MovieDetails = ({ movieDetails }) => {
  return (
    movieDetails && (
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
          alt={movieDetails.original_title}
          width={300}
        />
        <div>
          <h1>{movieDetails.original_title}</h1> ({movieDetails.release_date})
          <p>User Score: {movieDetails.vote_average * 10}%</p>
          <h2>Overview</h2>
          <p>{movieDetails.overview}</p>
          <h2>Genres</h2>
          {/* <ul>
            {movieDetails.genres.map(movie => (
              <li key={movie.id}>{movie.name}</li>
            ))}
          </ul> */}
        </div>
      </div>
    )
  );
};
MovieDetails.propTypes = {
  movieDetails: PropTypes.array,
};
