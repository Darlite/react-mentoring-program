import '../styles/SearchFormStyles.css';
import React from "react";

interface SearchFormProps {
    initialSearch: string;
    onSearch: (searchInput: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({initialSearch, onSearch}) => {
    return (
        <form className="searchForm"
              onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const input = form.elements.namedItem("searchInput") as HTMLInputElement;
                  onSearch(input.value);
              }}>
            <input name="searchInput"
                   className="searchForm__input"
                   type="text"
                   autoComplete="none"
                   placeholder={initialSearch}/>
            <button type="submit" className="searchForm__button">Search</button>
        </form>
    );
}

export default SearchForm;
