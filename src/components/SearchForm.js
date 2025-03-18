import '../styles/SearchFormStyles.css';

export default function SearchForm({initialSearch, onSearch}) {
    return (
        <form className="searchForm" onSubmit={onSearch}>
            <input className="searchForm__input" type="text" placeholder={initialSearch}/>
            <button type="submit" className="searchForm__button">Search</button>
        </form>
    );
}