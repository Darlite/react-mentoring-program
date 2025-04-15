import React, {useEffect, useState} from "react";
import axios from "axios";

import styles from './MovieListPage.module.css';

import SearchForm from "../../components/SearchForm/SearchForm";
import GenreSort from "../../components/GenreSort/GenreSort";
import MovieTile from "../../components/MovieTile/MovieTile";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import SortControl from "../../components/SortControl/SortControl";
import Dialog from "../../components/Dialog/Dialog";
import ModalContent from "../../components/ModalContent/ModalContent";

import {GenreNames} from "../../constants/GenreNames";
import {DialogType} from "../../constants/DialogType";
import {MovieDetailsData} from "../../types/MovieDetailsData";
import AddMovieButton from "../../components/AddMovieButton/AddMovieButton";

export default function MovieListPage() {
    const [movieList, setMovieList] = useState<MovieDetailsData[]>([]);
    const [selectedMovie, setSelectedMovie] = useState<MovieDetailsData | null>(null);
    const [showDialog, setShowDialog] = useState(false);
    const [currentDialog, setCurrentDialog] = useState("");
    const [filters, setFilters] = useState({
        searchQuery: "",
        selectedGenre: "",
        selectedSortControl: "release_date",
    });

    useEffect(() => {
        async function getMoviesList() {
            try {
                const response = await axios.get(
                    `http://localhost:4000/movies?limit=12&searchBy=title&search=${filters.searchQuery}&filter=${filters.selectedGenre}&sortBy=${filters.selectedSortControl}&sortOrder=asc`);
                setMovieList(response.data.data);
            }
            catch (error) {
                console.log("Error getting movie list ", error);
            }
        }
        getMoviesList();
    }, [filters.searchQuery, filters.selectedGenre, filters.selectedSortControl]);

    function updateFilters(key: string, value: string) {
        setFilters((prevState) => ({
            ...prevState,
            [key] : value,
        }));
    }

    function handleSearch(searchInput: string) {
        updateFilters("searchQuery", searchInput);
    }

    function handleGenreSelect(genre: string) {
        if (genre === "All") {
            updateFilters("selectedGenre", "");
            return;
        }

        updateFilters("selectedGenre", genre);
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

        if (dialogOption === DialogType.EditMovie && movieDetails) {
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
                    <AddMovieButton handleShowDialog={handleShowDialog} />
                </>
            )}

            <div className={styles.genreAndSortControls}>
                <GenreSort genreNames={GenreNames}
                           selectedGenre={filters.selectedGenre}
                           onSelect={handleGenreSelect}/>
                <SortControl currentSelection={filters.selectedSortControl}
                             onSelect={handleSortControlChange}/>
            </div>

            <div className={styles.movieList}>
                {movieList.map((movie) => (
                    <MovieTile key={movie.id}
                               movieDetails={movie}
                               onClick={handleTileClick}
                               handleEdit={() => handleShowDialog(DialogType.EditMovie, movie)}
                               handleDelete={() => handleShowDialog(DialogType.DeleteMovie)}
                    />
                ))}
            </div>

            <Dialog dialogTitle={currentDialog}
                    content={<ModalContent currentDialog={currentDialog}
                                           selectedMovie={selectedMovie}
                                           handleSubmit={handleSubmit} />}
                    handleToggleDialog={handleToggleDialog}
                    showDialog={showDialog}/>
        </div>
    );
}
