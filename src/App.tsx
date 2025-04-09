import styles from './App.module.css';
import Counter from "./components/Counter/Counter";
import SearchForm from "./components/SearchForm/SearchForm";
import GenreSelect from "./components/GenreSelect/GenreSelect";
import {genreNames} from "./constants";
import React, {useState} from "react";
import MovieTile from "./components/MovieTile/MovieTile";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import SortControl from "./components/SortControl/SortControl";
import {MovieDetailsData} from "./types/MovieDetailsData";
import Dialog from "./components/Dialog/Dialog";
import {createPortal} from "react-dom";
import MovieForm from "./components/MovieForm/MovieForm";

export default function App() {
    const [selectedGenre, setSelectedGenre] = useState("Documentary");
    const [selectedSortControl, setSelectedSortControl] = useState("Release Date");
    const [selectedMovie, setSelectedMovie] = useState<MovieDetailsData | null>(null);
    const [showDialog, setShowDialog] = useState(false);
    const [currentDialog, setCurrentDialog] = useState("");

    function handleSearch(searchInput: string) {
        console.log("Input from the search bar: ", searchInput);
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

        if (dialogOption === "Edit movie" && movieDetails) {
            setSelectedMovie(movieDetails);
        }

        handleToggleDialog();
    }

    function handleSubmit(MovieData: Object) {
        console.log(MovieData);
    }

    const moviesDataList = [
        {
            id: 1,
            imageUrl: "images/Pulp_Fiction.png",
            title: "Pulp Fiction",
            releaseDate: "1994-09-23",
            movieUrl: "https://www.imdb.com/title/tt0110912",
            genres: ["Crime", "Thriller"],
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
            genres: ["Musical", "Documentary"],
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
            genres: ["Action", "Thriller"],
            runtime: "2h 17m",
            rating: "8.9",
            description: "A pregnant woman, codenamed the Bride, sets out on a journey to kill her ex-boss, Bill, and targets his brother, Budd, and Elle Driver, the only two survivors of the Deadly Vipers Assassination Squad.",
        },
    ]

    return (
        <div id="App"
             className={showDialog ? styles.app + " " + styles.appBlured : styles.app}>
            <span className={styles.addMovieButton}
                  id="addMovieButton"
                  role="button"
                  onClick={() => handleShowDialog("Add movie")}>+ Add movie</span>
            {selectedMovie ? <MovieDetails movieDetails={selectedMovie}/> :
                <SearchForm initialSearch={"What do you want to watch?"}
                            onSearch={handleSearch}/>}
            <div className={styles.genreAndSortControls}>
                <GenreSelect genreNames={genreNames}
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
                               handleEdit={() => handleShowDialog("Edit movie", movie)}
                               handleDelete={() => handleShowDialog("Delete movie")}
                    />
                ))}
            </div>
            {showDialog && createPortal(<Dialog dialogTitle={currentDialog}
                                                content={
                                                    currentDialog === "Edit movie" ? (
                                                        <MovieForm initialMovieInfo={selectedMovie}
                                                                   handleSubmit={handleSubmit}/>
                                                        ) : currentDialog === "Add movie" ? (
                                                            <MovieForm handleSubmit={handleSubmit}/>
                                                        ) : (<p>Deleting movie</p>)
                                                }
                                                handleToggleDialog={handleToggleDialog}/>, document.body)}
            <Counter initialCount={3}/>
        </div>
    );
}
