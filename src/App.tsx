import styles from './App.module.css';
import Counter from "./components/Counter";
import SearchForm from "./components/SearchForm";
import GenreSelect from "./components/GenreSelect";
import {genreNames} from "./constants";
import {useState} from "react";
import MovieTile from "./components/MovieTile";
import MovieDetails from "./components/MovieDetails";
import SortControl from "./components/SortControl";

export default function App() {
    const [selectedGenre, setSelectedGenre] = useState<string>("Documentary");
    const [selectedSortControl, setSelectedSortControl] = useState<string>("Release Date");

    function handleSearch(searchInput: string) {
        console.log("Input from the search bar: ", searchInput);
    }

    function handleGenreSelect(genre: string) {
        setSelectedGenre(genre);
    }

    function handleTileClick(movieName: string) {
        console.log("Clicked on: ", movieName);
    }

    function handleSortControlChange(option: string) {
        setSelectedSortControl(option);
    }

    const moviesData = {
        imageUrl: "images/Pulp_Fiction.png",
        movieName: "Pulp Fiction",
        releaseYear: 1994,
        relevantGenres: ["Crime", "Thriller"],
        duration: "2h 34m",
        rating: 8.9,
        description: "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra",
    }

    return (
        <div className={styles.app}>
            <Counter initialCount={3}/>
            <SearchForm initialSearch={"What do you want to watch?"}
                        onSearch={handleSearch}/>
            <GenreSelect genreNames={genreNames}
                         selectedGenre={selectedGenre}
                         onSelect={handleGenreSelect}/>
            <SortControl currentSelection={selectedSortControl}
                         onSelect={handleSortControlChange}/>
            <MovieTile movieDetails={moviesData}
                       onClick={handleTileClick}
            />
            <MovieDetails movieDetails={moviesData} />
        </div>
    );
}
