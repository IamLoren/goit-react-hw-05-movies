
const SearchForm = ({ handleFormSubmit }) => {

  return (
    <section className="searchSection">
      <div className="container">
        <form onSubmit={handleFormSubmit}>
          <input
            type="search"
            name="queryInput"
            placeholder="Type the title"
          />
          <button type="submit">
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default SearchForm;
