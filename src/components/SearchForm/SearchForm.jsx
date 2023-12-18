import {StyledSection} from './SearchForm.js'

const SearchForm = ({ handleFormSubmit }) => {

  return (
    <StyledSection className="searchSection">
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
    </StyledSection>
  );
};

export default SearchForm;
