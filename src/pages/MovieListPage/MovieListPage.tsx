import React, {useState} from "react";

import styles from './MovieListPage.module.css';

import GenreSort from "../../components/GenreSort/GenreSort";
import SortControl from "../../components/SortControl/SortControl";
import Dialog from "../../components/Dialog/Dialog";
import ModalContent from "../../components/ModalContent/ModalContent";

import {GenreNames} from "../../constants/GenreNames";
import {MovieDetailsData} from "../../types/MovieDetailsData";
import AddMovieButton from "../../components/AddMovieButton/AddMovieButton";
import MovieList from "../../components/MovieList/MovieList";
import {useMovies} from "../../hooks/useMovies";
import {Outlet, useMatch, useNavigate, useSearchParams} from "react-router-dom";


export default function MovieListPage() {
    let [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get("search") || "";
    const filter = searchParams.get("filter") || "";
    const sortBy = searchParams.get("sortBy") || "release_date";
    const sortOrder = searchParams.get("sortOrder") || "asc";

    const [selectedMovie, setSelectedMovie] = useState<MovieDetailsData | null>(null);
    const [showDialog, setShowDialog] = useState(false);
    const [currentDialog, setCurrentDialog] = useState("");

    const navigate = useNavigate();

    const isRoot = useMatch({path: "/", end: true});

    const {moviesFound, movieList, isLoading, error} = useMovies(search, filter, sortBy, sortOrder);

    function handleGenreSelect(genre: string) {
        setSearchParams({
            search,
            filter: genre === "All" ? "" : genre,
            sortBy,
            sortOrder,
        });
    }

    function handleSortControlChange(option: string) {
        setSearchParams({
            search,
            filter,
            sortBy: option,
            sortOrder
        });
    }

    function toggleSortOrder() {
        const sorting = sortOrder === "asc" ? "desc" : "asc";
        setSearchParams({
            search,
            filter,
            sortBy,
            sortOrder: sorting,
        });
    }

    function handleTileClick(movieDetails: MovieDetailsData) {
        navigate(`movies/${movieDetails.id}${window.location.search}`);
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
        console.log("Movie List Page: ", MovieData);
    }

    function handleAddMovieButtonClick() {
        navigate("/new");
    }

    return (
        <div className={
            showDialog
                ? `${styles.movieListPageContainer} ${styles.movieListPageContainerBlured}`
                : styles.movieListPageContainer
        }
        >
            <Outlet/>

            {isRoot && <AddMovieButton handleShowDialog={handleAddMovieButtonClick}/>}

            <div className={styles.genreAndSortControls}>
                <GenreSort genreNames={GenreNames}
                           selectedGenre={filter}
                           onSelect={handleGenreSelect}/>
                <SortControl currentSelection={sortBy}
                             onSelect={handleSortControlChange}
                             sortOrder={sortOrder}
                             onSortOrderChange={toggleSortOrder}/>
                <div className={styles.moviesFound}>
                    <span className={styles.moviesFoundCount}>{moviesFound}</span> movies found
                </div>
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
