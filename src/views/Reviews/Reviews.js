import PropTypes from 'prop-types';

import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import { fetchReviewsMovie } from '../../service/FetchMovieDB';

export const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    resultFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const resultFetch = async () => {
    const res = await fetchReviewsMovie(movieId);
    setReviews(res.results);
  };
  // console.log(reviews);
  return (
    <ul>
      {reviews && reviews.length > 0 ? (
        reviews.map(el => (
          <li key={el.id}>
            <h2>Author:{el.author}</h2>
            <p>{el.content}</p>
          </li>
        ))
      ) : (
        <h2>We don't have any reviews for this movie </h2>
      )}
    </ul>
  );
};
Reviews.propTypes = {
  movieId: PropTypes.string,
};
