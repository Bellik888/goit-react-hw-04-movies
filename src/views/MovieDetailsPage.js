import { useEffect, useState } from 'react';
import { useParams, Route, useRouteMatch } from 'react-router';
import { fetchDetailsMovie } from '../service/FetchMovieDB';

import { MovieDetails } from '../components/MovieDetails';
import { AddInfoDetails } from '../components/AddInfoDetails';
import { Cast } from './Cast';
import { Reviews } from './Reviews';

export const MovieDetailsPage = () => {
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
      <hr />
      <AddInfoDetails movieId={movieId} />
      <hr />
      <Route exact path={`${url}/cast`}>
        <Cast movieId={movieId} />
      </Route>
      <Route exact path={`${url}/reviews`}>
        <Reviews movieId={movieId} />
      </Route>
    </>
  );
};

// const ImgUrl = 'https://image.tmdb.org/t/p/w500';
