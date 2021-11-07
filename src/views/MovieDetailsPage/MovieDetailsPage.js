import { useEffect, useState } from 'react';
import {
  useParams,
  Route,
  useRouteMatch,
  useHistory,
  useLocation,
} from 'react-router';

import { fetchDetailsMovie } from '../../service/FetchMovieDB';
import { MovieDetails } from '../../components/MovieDetails/MovieDetails';
import { AddInfoDetails } from '../../components/AddInfoDetails/AddInfoDetails';
import { Cast } from '../Cast/Cast';
import { Reviews } from '../ReviewsPage/Reviews';
import { BtnGoBack } from '../../components/BtnGoBack/BtnGoBack';

const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const { url } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    fetchResult();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchResult = async () => {
    const result = await fetchDetailsMovie(movieId);
    setMovieDetails(result);
  };
  const handleBackClick = () => {
    history.push(location?.state?.from ?? '/');
    console.log(location);
  };
  //   console.log(movieDetails);

  return (
    <>
      <BtnGoBack handleBackClick={handleBackClick} />
      <MovieDetails movieDetails={movieDetails} />
      <AddInfoDetails
        movieId={movieId}
        title={'Additional information'}
        url={url}
        location={location}
      />
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
