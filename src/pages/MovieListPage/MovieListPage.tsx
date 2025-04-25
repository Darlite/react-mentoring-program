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
import {useSearchParams} from "react-router-dom";


export default function MovieListPage() {
    let [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get("search") || "";
    const filter = searchParams.get("filter") || "";
    const sortBy = searchParams.get("sortBy") || "releaseDate";

    const [selectedMovie, setSelectedMovie] = useState<MovieDetailsData | null>(null);
    const [showDialog, setShowDialog] = useState(false);
    const [currentDialog, setCurrentDialog] = useState("");

    const {movieList, isLoading, error} = useMovies(search, filter, sortBy);

    function handleGenreSelect(genre: string) {
        setSearchParams({
            search,
            filter: genre === "All" ? "" : genre,
            sortBy
        });
    }

    function handleSortControlChange(option: string) {
        setSearchParams({
            search,
            filter,
            sortBy: option,
        });
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
                    <SearchForm initialSearch={"What do you want to watch?"} />
                    <AddMovieButton handleShowDialog={handleShowDialog}/>
                </>
            )}

            <div className={styles.genreAndSortControls}>
                <GenreSort genreNames={GenreNames}
                           selectedGenre={filter}
                           onSelect={handleGenreSelect}/>
                <SortControl currentSelection={sortBy}
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
