import React, {useState} from "react";

import styles from './MovieListPage.module.css';

import SearchForm from "../SearchForm/SearchForm";
import GenreSort from "../GenreSort/GenreSort";
import MovieTile from "../MovieTile/MovieTile";
import MovieDetails from "../MovieDetails/MovieDetails";
import SortControl from "../SortControl/SortControl";
import Dialog from "../Dialog/Dialog";
import ModalContent from "../ModalContent/ModalContent";

import {GenreNames} from "../../constants/GenreNames";
import {GenreType} from "../../constants/GenreType";
import {DialogType} from "../../constants/DialogType";
import {MovieDetailsData} from "../../types/MovieDetailsData";

export default function MovieListPage() {
    const [seachQuery, setSeachQuery] = useState("");
    const [selectedGenre, setSelectedGenre] = useState("Documentary");
    const [selectedSortControl, setSelectedSortControl] = useState("Release Date");
    const [selectedMovie, setSelectedMovie] = useState<MovieDetailsData | null>(null);
    const [showDialog, setShowDialog] = useState(false);
    const [currentDialog, setCurrentDialog] = useState("");

    function handleSearch(searchInput: string) {
        console.log("Input from the search bar: ", searchInput);
        setSeachQuery(searchInput);
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

    const moviesDataList = [
        {
            id: 1,
            imageUrl: "images/Pulp_Fiction.png",
            title: "Pulp Fiction",
            releaseDate: "1994-09-23",
            movieUrl: "https://www.imdb.com/title/tt0110912",
            genres: [GenreType.Crime, GenreType.Thriller],
            runtime: "2h 34m",
            rating: "8.9",
            description: "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra",
        },
        {
            id: 2,
            imageUrl: "images/Bohemian_Rhapsody.png",
            title: "Bohemian Rhapsody",
            releaseDate: "2018-10-30",
            movieUrl: "https://www.imdb.com/title/tt1727824",
            genres: [GenreType.Musical, GenreType.Documentary],
            runtime: "2h 15m",
            rating: "8.5",
            description: "With his impeccable vocal abilities, Freddie Mercury and his rock band, Queen, achieve superstardom. However, amidst his skyrocketing success, he grapples with his ego, sexuality and a fatal illness.",
        },
        {
            id: 3,
            imageUrl: "images/Kill_Bill_Volume_2.png",
            title: "Kill Bill: Vol. 2",
            releaseDate: "2004-04-08",
            movieUrl: "https://www.imdb.com/title/tt0378194",
            genres: [GenreType.Action, GenreType.Thriller],
            runtime: "2h 17m",
            rating: "8.9",
            description: "A pregnant woman, codenamed the Bride, sets out on a journey to kill her ex-boss, Bill, and targets his brother, Budd, and Elle Driver, the only two survivors of the Deadly Vipers Assassination Squad.",
        },
    ]

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
                {moviesDataList.map((movie) => (
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
