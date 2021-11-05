import PropTypes from 'prop-types';
import s from './Reviews.module.css';

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
    <ul className={s.list}>
      {reviews && reviews.length > 0 ? (
        reviews.map(el => (
          <li key={el.id} className={s.item}>
            <h2 className={s.author}>Author:{el.author}</h2>
            <p className={s.content}>{el.content}</p>
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
