import React from 'react';

const SearchBox = ({ handleChange }) => {
  return (
    <div>
      <input
        className='search'
        type='text'
        placeholder='Search your favourite movie...'
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
