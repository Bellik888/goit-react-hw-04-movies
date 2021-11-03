import { useEffect, useState } from 'react';
import { useParams, Route } from 'react-router';
import { fetchDetailsMovie } from '../service/FetchMovieDB';

import { MovieDetails } from '../components/MovieDetails';
import { AddInfoDetails } from '../components/AddInfoDetails';
import { Cast } from './Cast';

export const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchResult();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchResult = async () => {
    const result = await fetchDetailsMovie(movieId);
    setMovieDetails(result);
  };
  console.log(movieDetails);

  return (
    <>
      <MovieDetails movieDetails={movieDetails} />
      <hr />
      <AddInfoDetails movieId={movieId} />
      <hr />
      <Route exact path="/movies/:movieId/cast">
        <Cast movieId={movieId} />
      </Route>
    </>
  );
};

// const ImgUrl = 'https://image.tmdb.org/t/p/w500';
