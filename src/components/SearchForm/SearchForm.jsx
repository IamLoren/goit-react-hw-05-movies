import React from 'react';

const SearchForm = ({query, handleFormSubmit}) => {
  return (
    <section className="searchSection">
      <div className="container">
        <form onSubmit={handleFormSubmit}>
          <input type="search" name="query" placeholder="Type the title" />
          <button type="submit">Search</button>
        </form>
      </div>
    </section>
  );
};

export default SearchForm;
