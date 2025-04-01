import styles from '../styles/SearchFormStyles.module.css';
import React from "react";

interface SearchFormProps {
    initialSearch: string;
    onSearch: (searchInput: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({initialSearch, onSearch}) => {
    return (
        <div className={styles.searchFormContainer}>
            <h1 className={styles.formTittle}>Find your movie</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const input = form.elements.namedItem("searchInput") as HTMLInputElement;
                    onSearch(input.value);
                }}>
                <input name="searchInput"
                       className={styles.searchFormInput}
                       type="text"
                       autoComplete="none"
                       placeholder={initialSearch}/>
                <button type="submit" className={styles.searchFormButton}>Search</button>
            </form>
        </div>
    );
}

export default SearchForm;
