import PropTypes from 'prop-types';

import { useState } from 'react';

import s from './Form.module.css';
export const Form = ({ handleChangeQuery }) => {
  const [inputSearch, setInputSearch] = useState(null);

  const handleSearchInput = e => {
    setInputSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleChangeQuery(inputSearch);
    // resetForm();
  };
  // const resetForm = (e) => {
  //   setInputSearch('')
  //   console.log(e.currentTarget);
  // }
  // console.log(inputSearch);

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <input
        type="text"
        onChange={handleSearchInput}
        placeholder="Choose your movie"
        className={s.input}
      />
      <button type="submit" className={s.btn}>
        Search
      </button>
    </form>
  );
};
Form.propTypes = {
  handleChangeQuery: PropTypes.func,
};
