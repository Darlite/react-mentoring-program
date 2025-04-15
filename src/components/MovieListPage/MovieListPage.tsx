import React, {useEffect, useState} from "react";
import axios from "axios";

import styles from './MovieListPage.module.css';

import SearchForm from "../SearchForm/SearchForm";
import GenreSort from "../GenreSort/GenreSort";
import MovieTile from "../MovieTile/MovieTile";
import MovieDetails from "../MovieDetails/MovieDetails";
import SortControl from "../SortControl/SortControl";
import Dialog from "../Dialog/Dialog";
import ModalContent from "../ModalContent/ModalContent";

import {GenreNames} from "../../constants/GenreNames";
import {DialogType} from "../../constants/DialogType";
import {MovieDetailsData} from "../../types/MovieDetailsData";

export default function MovieListPage() {
    const [movieList, setMovieList] = useState<any[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedGenre, setSelectedGenre] = useState("All");
    const [selectedSortControl, setSelectedSortControl] = useState("Release Date");
    const [selectedMovie, setSelectedMovie] = useState<MovieDetailsData | null>(null);
    const [showDialog, setShowDialog] = useState(false);
    const [currentDialog, setCurrentDialog] = useState("");

    useEffect(() => {
        async function getInitialMovieList() {
            try {
                const response = await axios.get("http://localhost:4000/movies?limit=12");
                console.log("Response from getInitialMovieList: ", response.data.data);
                setMovieList(response.data.data);
            }
            catch (error) {
                console.log("Error getting initial movie list ", error);
            }
        }
        getInitialMovieList();
    }, []);

    useEffect(() => {
        console.log("The state has been changed: ", searchQuery);
        async function fetchData () {
            const response = await axios.get("http://localhost:4000/movies?searchBy=title&search=" + searchQuery);
            console.log("Response: ", response.data);
            setMovieList(response.data.data);
        }

        fetchData();
    }, [searchQuery]);

    function handleSearch(searchInput: string) {
        console.log("Input from the search bar: ", searchInput);
        setSearchQuery(searchInput);
    }

    function handleGenreSelect(genre: string) {
        setSelectedGenre(genre);
    }

    function handleTileClick(movieDetails: MovieDetailsData) {
        console.log("Clicked on: ", movieDetails);
        setSelectedMovie(movieDetails);
    }

    function handleSortControlChange(option: string) {
        setSelectedSortControl(option);
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
        <div className={showDialog ? styles.movieListPageContainer + " " + styles.movieListPageContainerBlured : styles.movieListPageContainer}>

            {selectedMovie ? <MovieDetails movieDetails={selectedMovie} handleBackToSearch={handleBackToSearch}/> :
                <>
                    <SearchForm initialSearch={"What do you want to watch?"}
                                onSearch={handleSearch}/>
                    <span className={styles.addMovieButton}
                          id="addMovieButton"
                          role="button"
                          onClick={() => handleShowDialog(DialogType.AddMovie)}>+ Add movie</span>
                </>
            }

            <div className={styles.genreAndSortControls}>
                <GenreSort genreNames={GenreNames}
                           selectedGenre={selectedGenre}
                           onSelect={handleGenreSelect}/>
                <SortControl currentSelection={selectedSortControl}
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
