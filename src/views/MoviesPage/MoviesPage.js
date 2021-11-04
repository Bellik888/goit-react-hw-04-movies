import { useEffect, useState } from 'react';
import { Form } from '../../components/Form/Form';

import { fetchSearchMovie } from '../../service/FetchMovieDB';
import { HomeList } from '../../components/HomeList/HomeList';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (query === '') {
      return;
    }
    resultFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const handleChangeQuery = e => {
    setQuery(e);
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
      <HomeList moviesList={result} />
    </div>
  );
};

export default MoviesPage;
