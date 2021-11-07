import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Form } from '../../components/Form/Form';
import queryString from 'query-string';

import { fetchSearchMovie } from '../../service/FetchMovieDB';
// import { HomeList } from '../../components/HomeList/HomeList';
import { MoviesList } from '../../components/MoviesList/MoviesList';

const MoviesPage = () => {
  const history = useHistory();
  const location = useLocation();
  const { query } = queryString.parse(location.search);
  const [searchQuery, setSearchQuery] = useState(query || '');
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    resultFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const handleChangeQuery = e => {
    setSearchQuery(e);
    history.push({
      ...location,
      search: `query=${e}`,
    });
    // console.log(history);
    console.log(location);
  };

  const resultFetch = async () => {
    const result = await fetchSearchMovie(query);
    setResult(result);
  };
  // console.log(query);
  // console.log(result);

  return (
    <div>
      <Form handleChangeQuery={handleChangeQuery} />
      {/* <MovieDetails movieDetails={result}/> */}
      <MoviesList moviesList={result} location={location} />
    </div>
  );
};

export default MoviesPage;
