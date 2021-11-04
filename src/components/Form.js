import PropTypes from 'prop-types';

import { useState } from 'react';

export const Form = ({ handleChangeQuery }) => {
  const [inputSearch, setInputSearch] = useState(null);

  const handleSearchInput = e => {
    setInputSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleChangeQuery(inputSearch);
  };
  // console.log(inputSearch);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleSearchInput} />
      <button type="submit">Search</button>
    </form>
  );
};
Form.propTypes = {
  handleChangeQuery: PropTypes.func,
};
