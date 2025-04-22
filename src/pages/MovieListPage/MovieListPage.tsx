import React, {useState} from "react";

import styles from './MovieListPage.module.css';

import SearchForm from "../../components/SearchForm/SearchForm";
import GenreSort from "../../components/GenreSort/GenreSort";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import SortControl from "../../components/SortControl/SortControl";
import Dialog from "../../components/Dialog/Dialog";
import ModalContent from "../../components/ModalContent/ModalContent";

import {GenreNames} from "../../constants/GenreNames";
import {MovieDetailsData} from "../../types/MovieDetailsData";
import AddMovieButton from "../../components/AddMovieButton/AddMovieButton";
import MovieList from "../../components/MovieList/MovieList";
import {useMovies} from "../../hooks/useMovies";

export default function MovieListPage() {
    const [selectedMovie, setSelectedMovie] = useState<MovieDetailsData | null>(null);
    const [showDialog, setShowDialog] = useState(false);
    const [currentDialog, setCurrentDialog] = useState("");
    const [filters, setFilters] = useState({
        searchQuery: "",
        selectedGenre: "",
        selectedSortControl: "release_date",
    });

    const {movieList, isLoading, error} = useMovies(filters);

    function updateFilters(key: "searchQuery" | "selectedGenre" | "selectedSortControl", value: string) {
        setFilters((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    }

    function handleSearch(searchInput: string) {
        updateFilters("searchQuery", searchInput);
    }

    function handleGenreSelect(genre: string) {
        updateFilters("selectedGenre", genre === "All" ? "" : genre);
    }

    function handleSortControlChange(option: string) {
        updateFilters("selectedSortControl", option);
    }

    function handleTileClick(movieDetails: MovieDetailsData) {
        setSelectedMovie(movieDetails);
    }

    function handleToggleDialog() {
        setShowDialog(!showDialog);
    }

    function handleShowDialog(dialogOption: string, movieDetails?: MovieDetailsData) {
        setCurrentDialog(dialogOption);

        if (movieDetails) {
            setSelectedMovie(movieDetails);
        }

        handleToggleDialog();
    }

    function handleSubmit(MovieData: MovieDetailsData) {
        console.log(MovieData);
    }

    function handleBackToSearch() {
        setSelectedMovie(null);
    }

    return (
        <div className={
            showDialog
                ? styles.movieListPageContainer + " " + styles.movieListPageContainerBlured
                : styles.movieListPageContainer
        }
        >

            {selectedMovie ? (
                <MovieDetails movieDetails={selectedMovie} handleBackToSearch={handleBackToSearch}/>
            ) : (
                <>
                    <SearchForm initialSearch={"What do you want to watch?"}
                                onSearch={handleSearch}/>
                    <AddMovieButton handleShowDialog={handleShowDialog}/>
                </>
            )}

            <div className={styles.genreAndSortControls}>
                <GenreSort genreNames={GenreNames}
                           selectedGenre={filters.selectedGenre}
                           onSelect={handleGenreSelect}/>
                <SortControl currentSelection={filters.selectedSortControl}
                             onSelect={handleSortControlChange}/>
            </div>

            {error && <p>Error: {error}</p>}
            {isLoading ? <p>Loading movies...</p> : movieList.length !== 0 ?
                <MovieList movieList={movieList}
                           handleTileClick={handleTileClick}
                           handleEditMovie={handleShowDialog}
                           handleDeleteMovie={handleShowDialog}
                /> : null
            }
            {(!isLoading && movieList.length === 0) && <p>No movies found</p>}

            <Dialog dialogTitle={currentDialog}
                    content={<ModalContent currentDialog={currentDialog}
                                           selectedMovie={selectedMovie}
                                           handleSubmit={handleSubmit}/>}
                    handleToggleDialog={handleToggleDialog}
                    showDialog={showDialog}/>
        </div>
    );
}
