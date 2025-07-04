import styles from './SearchForm.module.css';
import React from "react";
import {Form, useSearchParams} from "react-router-dom";

interface SearchFormProps {
    initialSearch?: string;
}

const SearchForm: React.FC<SearchFormProps> = ({initialSearch = "What do you want to watch?"}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get("search") || "";
    const filter = searchParams.get("filter") || "";
    const sortBy = searchParams.get("sortBy") || "release_date";
    const sortOrder = searchParams.get("sortOrder") || "asc";

    function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const input = form.elements.namedItem("searchInput") as HTMLInputElement;
        setSearchParams({
            search: input.value,
            filter,
            sortBy,
            sortOrder
        });
    }


    return (
        <div className={styles.searchFormContainer}>
            <h1 className={styles.formTittle}>Find your movie</h1>
            <Form className={styles.searchForm}
                  name="search"
                  role="search"
                  onSubmit={handleOnSubmit}>
                <input name="searchInput"
                       data-cy="search-input"
                       className={styles.searchFormInput}
                       type="search"
                       autoComplete="none"
                       placeholder={initialSearch}
                       defaultValue={search}
                       aria-label="Search movie"/>
                <button type="submit" className={styles.searchFormButton}>Search</button>
            </Form>
        </div>
    );
}

export default SearchForm;
