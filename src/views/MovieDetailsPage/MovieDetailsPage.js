import { useEffect, useState } from 'react';
import { useParams, Route, useRouteMatch } from 'react-router';

import { fetchDetailsMovie } from '../../service/FetchMovieDB';
import { MovieDetails } from '../../components/MovieDetails/MovieDetails';
import { AddInfoDetails } from '../../components/AddInfoDetails/AddInfoDetails';
import { Cast } from '../Cast/Cast';
import { Reviews } from '../Reviews/Reviews';

const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const { url } = useRouteMatch();

  useEffect(() => {
    fetchResult();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchResult = async () => {
    const result = await fetchDetailsMovie(movieId);
    setMovieDetails(result);
  };
  //   console.log(movieDetails);

  return (
    <>
      <MovieDetails movieDetails={movieDetails} />
      <AddInfoDetails movieId={movieId} title={'Additional information'} />
      <Route exact path={`${url}/cast`}>
        <Cast movieId={movieId} />
      </Route>
      <Route exact path={`${url}/reviews`}>
        <Reviews movieId={movieId} />
      </Route>
    </>
  );
};

export default MovieDetailsPage;
